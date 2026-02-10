import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import { createClient } from 'contentful';
import { motion } from 'framer-motion';
import { unstable_cache } from 'next/cache';

import SEOComponent from '@/components/SEOComponent';
import TextBoxWithImage from '../components/textbox-variations/TextBoxWithImage';
import TextBlock from '../components/textbox-variations/TextBlock';
import ManagementCard from '../components/ManagementCard';
import { client } from '../tina/__generated__/client';
import { PagesBlocks } from '../tina/__generated__/types';

// Contentful client setup
const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  environment: process.env.CONTENTFUL_ENVIRONMENT || 'master',
});

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

type SEO = { title?: string; description?: string };

interface Content {
  title: string;
  seo: SEO | null;
  blocks?: PagesBlocks[];
}

// Assuming High Committee entries use the same field shape as Management.
interface HighCommitteeFields {
  nameEn?: string;
  nameFr?: string;
  nameAr?: string;
  designationEn?: string;
  designationFr?: string;
  designationAr?: string;
  profileImg?: { fields: { file: { url: string } } };
  whatsapp?: string;
  linkedinUrl?: string;
  // Contentful boolean field (some environments may serialize as string/number)
  isHighCommittee?: boolean | string | number;
  ishighcommitte?: boolean | string | number;
  orderId?: number | string;
  OrderId?: number | string;
  displayOrder?: number;
}

interface HighCommitteeEntry {
  name: string;
  designation?: string;
  profileImg?: string;
  whatsappUrl?: string;
  linkedinUrl?: string;
  isHighCommittee?: boolean;
}

interface HighCommitteeProps {
  content: Content;
  entries: HighCommitteeEntry[];
  locale: string;
}

const normalizeOrderValue = (value: unknown): number | null => {
  if (typeof value === 'number' && Number.isFinite(value)) return value;
  if (typeof value === 'string') {
    const parsed = Number(value.trim());
    return Number.isFinite(parsed) ? parsed : null;
  }
  return null;
};

export const getStaticProps: GetStaticProps<HighCommitteeProps> = async ({ locale }) => {
  // TinaCMS fetch
  let tinaContent: Content = { title: 'High Committee', seo: null, blocks: [] };
  try {
    // Some locales don't have the file yet; fall back to English so the page still builds.
    const desiredPath = `${locale}/High-Committee.md`;
    const fallbackPath = `en/High-Committee.md`;

    const res = await client.queries.pages({ relativePath: desiredPath }).catch(() =>
      client.queries.pages({ relativePath: fallbackPath })
    );

    const rawContent = res.data.pages;
    const seoTemp: SEO = {};
    if (rawContent.seo) {
      if (rawContent.seo.title) seoTemp.title = rawContent.seo.title;
      if (rawContent.seo.description) seoTemp.description = rawContent.seo.description;
    }

    tinaContent = {
      title: rawContent.title || 'High Committee',
      seo: Object.keys(seoTemp).length ? seoTemp : null,
      blocks: rawContent.blocks || [],
    };
  } catch (err) {
    console.error('Tina fetch error:', err);
  }

  // Contentful fetch with caching
  let entries: HighCommitteeEntry[] = [];
  try {
    const langSuffix = (locale || 'en').split('-')[0].toLowerCase();
    const localeKey = langSuffix.charAt(0).toUpperCase() + langSuffix.slice(1).toLowerCase();

    const fetchItems = async () => {
      const response = await contentfulClient.getEntries({
        content_type: 'highCommittee',
        include: 2,
        limit: 1000,
      });
      return response.items;
    };

    // In dev, bypass Next cache so changes in Contentful show up immediately.
    const items =
      process.env.NODE_ENV === 'development'
        ? await fetchItems()
        : await unstable_cache(fetchItems, [`high-committee-entries-${locale}`], { revalidate: 86400 })();

    const normalizeBool = (v: unknown): boolean => {
      if (typeof v === 'boolean') return v;
      if (typeof v === 'string') {
        const s = v.trim().toLowerCase();
        if (s === 'true') return true;
        if (s === 'false') return false;
        return Boolean(s);
      }
      if (typeof v === 'number') return v !== 0;
      return false;
    };

    const sortedItems = [...items].sort((a, b) => {
      const aFields = a.fields as HighCommitteeFields;
      const bFields = b.fields as HighCommitteeFields;
      const aOrder = normalizeOrderValue(aFields.orderId ?? aFields.OrderId ?? aFields.displayOrder);
      const bOrder = normalizeOrderValue(bFields.orderId ?? bFields.OrderId ?? bFields.displayOrder);

      if (aOrder !== null && bOrder !== null) return aOrder - bOrder;
      if (aOrder !== null) return -1;
      if (bOrder !== null) return 1;
      return 0;
    });

    entries = sortedItems.map((item) => {
      const fields = item.fields as HighCommitteeFields;

      const isHighCommittee = normalizeBool(fields.isHighCommittee ?? fields.ishighcommitte);

      const nameRaw = fields[`name${localeKey}` as keyof HighCommitteeFields] || fields.nameEn;
      const designationRaw = fields[`designation${localeKey}` as keyof HighCommitteeFields] || fields.designationEn;

      const name = typeof nameRaw === 'string' ? nameRaw : String(nameRaw ?? 'No Name');
      const designation =
        typeof designationRaw === 'string' ? designationRaw : String(designationRaw ?? 'No Designation');

      const rawUrl = fields.profileImg?.fields.file.url;
      const profileImg = rawUrl
        ? rawUrl.startsWith('//')
          ? `https:${rawUrl}`
          : rawUrl.replace(/^http:\/\//, 'https://')
        : undefined;
      const whatsapp = typeof fields.whatsapp === 'string' ? fields.whatsapp.trim() : '';
      const linkedinUrl = typeof fields.linkedinUrl === 'string' ? fields.linkedinUrl.trim() : '';

      return {
        name,
        ...(isHighCommittee ? { designation } : {}),
        ...(isHighCommittee && profileImg ? { profileImg } : {}),
        ...(whatsapp ? { whatsappUrl: whatsapp } : {}),
        ...(linkedinUrl ? { linkedinUrl } : {}),
        isHighCommittee,
      };
    });
  } catch (err) {
    console.error('Contentful fetch error:', err);
  }

  return {
    props: {
      content: tinaContent,
      entries,
      locale: locale || 'en',
    },
    revalidate: 86400,
  };
};

const HighCommitteePage: NextPage<HighCommitteeProps> = ({ content, entries, locale }) => {
  const renderEntriesGrid = (list: HighCommitteeEntry[], key: string) => {
    if (!Array.isArray(list) || list.length === 0) return null;
    return (
      <motion.div
        key={key}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {list.map((entry, i) => (
          <ManagementCard
            key={`${key}-${i}`}
            name={entry.name}
            designation={entry.designation}
            profileImg={entry.profileImg}
            whatsappUrl={entry.whatsappUrl}
            linkedinUrl={entry.linkedinUrl}
          />
        ))}
      </motion.div>
    );
  };

  const renderGroupedSections = () => {
    const blocks = content.blocks || [];
    const groupTrue = (entries || []).filter((e) => Boolean(e.isHighCommittee));
    const groupFalse = (entries || []).filter((e) => !Boolean(e.isHighCommittee));

    let textBlockCount = 0;
    const out: React.ReactNode[] = [];

    blocks.forEach((block, idx) => {
      switch (block.__typename) {
        case 'PagesBlocksTextBoxWithImage':
          out.push(<TextBoxWithImage key={`block-${idx}`} {...block} />);
          return;

        case 'PagesBlocksText':
          textBlockCount += 1;
          out.push(
            <div key={`block-${idx}`} className="spacy">
              <TextBlock content={block.content} />
            </div>
          );
          if (textBlockCount === 1) {
            out.push(renderEntriesGrid(groupTrue, 'entries-true'));
          } else if (textBlockCount === 2) {
            out.push(renderEntriesGrid(groupFalse, 'entries-false'));
          }
          return;

        default:
          return;
      }
    });

    // If no text blocks exist, render everything in one grid (previous behavior).
    if (textBlockCount === 0) {
      out.push(
        <div key="entries-all" className="mt-[120px] md:mt-[200px]">
          {renderEntriesGrid(entries || [], 'entries-all-grid')}
        </div>
      );
    }

    // If only one header exists, still render the "false" group at the end.
    if (textBlockCount === 1) {
      out.push(
        <div key="entries-false-fallback" className="mt-[40px] md:mt-[60px]">
          {renderEntriesGrid(groupFalse, 'entries-false-fallback-grid')}
        </div>
      );
    }

    return out;
  };

  return (
    <div className="high-committee" lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <SEOComponent
        title={content.seo?.title || content.title || 'High Committee'}
        description={
          content.seo?.description ||
          "Meet FENOR's High Committee, guiding the National Federation of Gold Factories with strategic leadership."
        }
        canonicalPath={`/${locale}/high-committee`}
      />

      <div className="container mx-auto py-[60px] md:py-[100px]">
        {Array.isArray(entries) && entries.length > 0 ? (
          <div className="space-y-[60px] md:space-y-[90px]">{renderGroupedSections()}</div>
        ) : (
          <div className="space-y-[60px] md:space-y-[90px]">{renderGroupedSections()}</div>
        )}
        {(!Array.isArray(entries) || entries.length === 0) && (
          <p className="text-center text-gray-500 mt-[120px]">No high committee entries found.</p>
        )}
      </div>
    </div>
  );
};

export default HighCommitteePage;
