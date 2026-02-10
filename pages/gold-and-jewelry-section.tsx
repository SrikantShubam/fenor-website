import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import { createClient } from 'contentful';
import { motion } from 'framer-motion';
import { unstable_cache } from 'next/cache';

import SEOComponent from '@/components/SEOComponent';
import TextBoxWithImage from '../components/textbox-variations/TextBoxWithImage';
import SimpleTextBox from '../components/textbox-variations/SimpleTextBox';
import ManagementCard from '../components/ManagementCard';
import JewelryActivitySection from '../components/JewelryActivitySection';
import { client } from '../tina/__generated__/client';
import { PagesBlocks } from '../tina/__generated__/types';

const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  environment: process.env.CONTENTFUL_ENVIRONMENT || 'master',
});

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

type SEO = { title?: string; description?: string };

interface Content {
  title: string;
  seo: SEO | null;
  blocks?: PagesBlocks[];
}

interface JewelryCraftingFields {
  nameEn?: string;
  nameFr?: string;
  nameAr?: string;
  name?: string;
  memberName?: string;
  designationEn?: string;
  designationFr?: string;
  designationAr?: string;
  designation?: string;
  role?: string;
  title?: string;
  profileImg?: { fields: { file: { url: string } } };
  profileImage?: { fields: { file: { url: string } } };
  image?: { fields: { file: { url: string } } };
  isExecutive?: boolean | string | number;
  isexecutive?: boolean | string | number;
  executive?: boolean | string | number;
  orderId?: number | string;
  OrderId?: number | string;
  displayOrder?: number;
}

interface JewelryCraftingEntry {
  name: string;
  designation?: string;
  profileImg?: string;
  isExecutive: boolean;
}

interface JewelryCraftingActivityFields {
  headerEn?: string;
  headerFr?: string;
  headerAr?: string;
  header_en?: string;
  header_fr?: string;
  header_ar?: string;
  contentEn?: string;
  contentFr?: string;
  contentAr?: string;
  content_en?: string;
  content_fr?: string;
  content_ar?: string;
  activityImage?: { fields: { file: { url: string } } };
  activity_image?: { fields: { file: { url: string } } };
}

interface JewelryCraftingActivityEntry {
  header: string;
  content: string;
  activityImage?: string;
}

interface GoldJewelleryPageProps {
  content: Content;
  entries: JewelryCraftingEntry[];
  activities: JewelryCraftingActivityEntry[];
  locale: string;
}

type TextHeadingBlock = Extract<PagesBlocks, { __typename?: 'PagesBlocksText' }>;
// Quick rollback switch: set to 'legacy' to use the previous activity visuals.
const ACTIVITY_SECTION_VARIANT: 'legacy' | 'v2' = 'legacy';

const normalizeBool = (value: unknown): boolean => {
  if (typeof value === 'boolean') return value;
  if (typeof value === 'string') {
    const normalized = value.trim().toLowerCase();
    if (['true', '1', 'yes', 'y'].includes(normalized)) return true;
    if (['false', '0', 'no', 'n', ''].includes(normalized)) return false;
    return false;
  }
  if (typeof value === 'number') return value !== 0;
  return false;
};

const normalizeOrderValue = (value: unknown): number | null => {
  if (typeof value === 'number' && Number.isFinite(value)) return value;
  if (typeof value === 'string') {
    const parsed = Number(value.trim());
    return Number.isFinite(parsed) ? parsed : null;
  }
  return null;
};

export const getStaticProps: GetStaticProps<GoldJewelleryPageProps> = async ({ locale }) => {
  let tinaContent: Content = {
    title: 'Department of Goldsmithing and Jewelry',
    seo: null,
    blocks: [],
  };

  try {
    const desiredPath = `${locale}/Gold-and-Jewellery-Section.md`;
    const fallbackPath = 'en/Gold-and-Jewellery-Section.md';
    const res = await client.queries.pages({ relativePath: desiredPath }).catch(() =>
      client.queries.pages({ relativePath: fallbackPath })
    );
    const rawContent = res.data.pages;

    const seoTemp: SEO = {};
    if (rawContent.seo?.title) seoTemp.title = rawContent.seo.title;
    if (rawContent.seo?.description) seoTemp.description = rawContent.seo.description;

    tinaContent = {
      title: rawContent.title || 'Department of Goldsmithing and Jewelry',
      seo: Object.keys(seoTemp).length > 0 ? seoTemp : null,
      blocks: rawContent.blocks || [],
    };
  } catch (error) {
    console.error('Tina fetch error (Department of Goldsmithing and Jewelry):', error);
  }

  let entries: JewelryCraftingEntry[] = [];
  try {
    const langSuffix = (locale || 'en').split('-')[0].toLowerCase();
    const localeKey = langSuffix.charAt(0).toUpperCase() + langSuffix.slice(1).toLowerCase();

    const fetchItems = async () => {
      const contentTypeCandidates = [
        'jewelryCraftingSection',
        'jewelleryCraftingSection',
        'jewelrycraftingsection',
        'jewellerycraftingsection',
      ];

      for (const contentTypeId of contentTypeCandidates) {
        try {
          const response = await contentfulClient.getEntries({
            content_type: contentTypeId,
            include: 2,
            limit: 1000,
          });
          if (response.items.length > 0) {
            return response.items;
          }
        } catch {
          // Try next candidate content type ID.
        }
      }

      // Fallback: discover entries by content-type id pattern when model id differs.
      const broadResponse = await contentfulClient.getEntries({ include: 2, limit: 1000 });
      return broadResponse.items.filter((item) => {
        const contentTypeId = item.sys.contentType?.sys?.id?.toLowerCase?.() || '';
        return contentTypeId.includes('jewel') || contentTypeId.includes('craft');
      });
    };

    const items =
      process.env.NODE_ENV === 'development'
        ? await fetchItems()
        : await unstable_cache(fetchItems, [`jewelry-crafting-section-${locale}`], {
            revalidate: 86400,
          })();

    const sortedItems = [...items].sort((a, b) => {
      const aFields = a.fields as JewelryCraftingFields;
      const bFields = b.fields as JewelryCraftingFields;
      const aOrder = normalizeOrderValue(aFields.orderId ?? aFields.OrderId ?? aFields.displayOrder);
      const bOrder = normalizeOrderValue(bFields.orderId ?? bFields.OrderId ?? bFields.displayOrder);

      if (aOrder !== null && bOrder !== null) return aOrder - bOrder;
      if (aOrder !== null) return -1;
      if (bOrder !== null) return 1;
      return 0;
    });

    entries = sortedItems.map((item) => {
      const fields = item.fields as JewelryCraftingFields;
      const nameRaw =
        fields[`name${localeKey}` as keyof JewelryCraftingFields] ||
        fields.nameEn ||
        fields.name ||
        fields.memberName;
      const designationRaw =
        fields[`designation${localeKey}` as keyof JewelryCraftingFields] ||
        fields.designationEn ||
        fields.designation ||
        fields.role ||
        fields.title;

      const rawUrl =
        fields.profileImg?.fields.file.url ||
        fields.profileImage?.fields.file.url ||
        fields.image?.fields.file.url;
      const profileImg = rawUrl
        ? rawUrl.startsWith('//')
          ? `https:${rawUrl}`
          : rawUrl.replace(/^http:\/\//, 'https://')
        : undefined;

      return {
        name: typeof nameRaw === 'string' ? nameRaw : String(nameRaw ?? 'No Name'),
        designation:
          typeof designationRaw === 'string'
            ? designationRaw
            : designationRaw
              ? String(designationRaw)
              : undefined,
        ...(profileImg ? { profileImg } : {}),
        isExecutive: normalizeBool(fields.isExecutive ?? fields.isexecutive ?? fields.executive),
      };
    });
  } catch (error) {
    console.error('Contentful fetch error (jewelryCraftingSection):', error);
  }

  let activities: JewelryCraftingActivityEntry[] = [];
  try {
    const langSuffix = (locale || 'en').split('-')[0].toLowerCase();
    const localeKey = langSuffix.charAt(0).toUpperCase() + langSuffix.slice(1).toLowerCase();

    const fetchActivityItems = async () => {
      const contentTypeCandidates = [
        'jewelryCraftingActivities',
        'jewelleryCraftingActivities',
        'jewelrycraftingactivities',
        'jewellerycraftingactivities',
      ];

      for (const contentTypeId of contentTypeCandidates) {
        try {
          const response = await contentfulClient.getEntries({
            content_type: contentTypeId,
            include: 2,
            limit: 1000,
          });
          if (response.items.length > 0) {
            return response.items;
          }
        } catch {
          // Try next candidate content type ID.
        }
      }

      return [];
    };

    const activityItems =
      process.env.NODE_ENV === 'development'
        ? await fetchActivityItems()
        : await unstable_cache(fetchActivityItems, [`jewelry-crafting-activities-${locale}`], {
            revalidate: 86400,
          })();

    const toTimestamp = (value?: string): number => {
      const parsed = value ? Date.parse(value) : NaN;
      return Number.isFinite(parsed) ? parsed : 0;
    };

    const sortedActivityItems = [...activityItems].sort(
      (a, b) => toTimestamp(a.sys.createdAt) - toTimestamp(b.sys.createdAt)
    );

    activities = sortedActivityItems.map((item) => {
      const fields = item.fields as JewelryCraftingActivityFields;
      const headerKey = `header${localeKey}` as keyof JewelryCraftingActivityFields;
      const contentKey = `content${localeKey}` as keyof JewelryCraftingActivityFields;
      const headerUnderscoreKey =
        localeKey === 'Fr'
          ? 'header_fr'
          : localeKey === 'Ar'
            ? 'header_ar'
            : 'header_en';
      const contentUnderscoreKey =
        localeKey === 'Fr'
          ? 'content_fr'
          : localeKey === 'Ar'
            ? 'content_ar'
            : 'content_en';

      const headerRaw = fields[headerKey] ?? fields[headerUnderscoreKey];
      const contentRaw = fields[contentKey] ?? fields[contentUnderscoreKey];
      const rawUrl = fields.activityImage?.fields.file.url || fields.activity_image?.fields.file.url;
      const activityImage = rawUrl
        ? rawUrl.startsWith('//')
          ? `https:${rawUrl}`
          : rawUrl.replace(/^http:\/\//, 'https://')
        : undefined;

      return {
        header: typeof headerRaw === 'string' ? headerRaw : '',
        content: typeof contentRaw === 'string' ? contentRaw : '',
        ...(activityImage ? { activityImage } : {}),
      };
    });
  } catch (error) {
    console.error('Contentful fetch error (jewelryCraftingActivities):', error);
  }

  return {
    props: {
      content: tinaContent,
      entries,
      activities,
      locale: locale || 'en',
    },
    revalidate: 86400,
  };
};

const GoldAndJewellerySectionPage: NextPage<GoldJewelleryPageProps> = ({
  content,
  entries,
  activities,
  locale,
}) => {
  const blocks = content.blocks || [];

  const introBlock = blocks.find((block) => block.__typename === 'PagesBlocksTextBoxWithImage');
  const sectionHeadingBlocks = blocks.filter(
    (block): block is TextHeadingBlock => block.__typename === 'PagesBlocksText'
  );
  const executiveHeadingBlock = sectionHeadingBlocks[0];
  const membersHeadingBlock = sectionHeadingBlocks[1];

  const activitiesBlocks = blocks.filter(
    (block) => block.__typename === 'PagesBlocksSimpleTextBox'
  );

  const executiveEntries = entries.filter((entry) => entry.isExecutive);
  const memberEntries = entries.filter((entry) => !entry.isExecutive);

  const renderBlock = (block: PagesBlocks, idx: number) => {
    if (block.__typename === 'PagesBlocksTextBoxWithImage') {
      return <TextBoxWithImage key={`intro-${idx}`} {...block} />;
    }
    if (block.__typename === 'PagesBlocksSimpleTextBox') {
      return <SimpleTextBox key={`intro-${idx}`} {...block} />;
    }
    return null;
  };

  const renderEntriesGrid = (list: JewelryCraftingEntry[], key: string) => {
    if (!Array.isArray(list) || list.length === 0) {
      return <p className="text-gray-400">No entries found.</p>;
    }

    return (
      <motion.div
        key={key}
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 md:gap-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {list.map((entry, idx) => (
          <ManagementCard
            key={`${key}-${idx}`}
            name={entry.name}
            designation={entry.designation}
            profileImg={entry.profileImg}
          />
        ))}
      </motion.div>
    );
  };

  const extractPlainText = (node: unknown): string => {
    if (!node) return '';
    if (typeof node === 'string') return node;
    if (Array.isArray(node)) return node.map(extractPlainText).join(' ');
    if (typeof node === 'object') {
      const current = node as { text?: unknown; children?: unknown };
      const ownText = typeof current.text === 'string' ? current.text : '';
      const childText = extractPlainText(current.children);
      return [ownText, childText].filter(Boolean).join(' ');
    }
    return '';
  };

  const renderThemedHeadingFromBlock = (block?: TextHeadingBlock) => {
    if (!block?.content) return null;

    const title = extractPlainText(block.content).replace(/\s+/g, ' ').trim();
    if (!title) return null;

    const words = title.split(' ');
    const lastWord = words.pop() || '';
    const precedingWords = words.join(' ');

    return (
      <div className="mb-8 md:mb-10">
        <h3 className="text-[26px] font-semibold leading-tight md:text-[36px]">
          {precedingWords && <span className="text-white">{precedingWords} </span>}
          <span className="text-[#FFDA66]">{lastWord}</span>
        </h3>
      </div>
    );
  };

  return (
    <div className="gold-and-jewelry-section" lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <SEOComponent
        title={content.seo?.title || content.title || 'Department of Goldsmithing and Jewelry'}
        description={
          content.seo?.description ||
          "Explore FENOR's Department of Goldsmithing and Jewelry, from executive leadership to member craftsmanship."
        }
        canonicalPath={`/${locale}/gold-and-jewelry-section`}
      />

      <div className="container mx-auto py-[30px]">
        <div className="space-y-[80px] md:space-y-[130px]">
          {introBlock ? (
            <div
              className="mb-[52px] md:mb-[64px] [&_h3]:mb-3 md:[&_h3]:mb-4 [&_h3_span:last-child]:block [&_h3_span:last-child]:mt-0 md:[&_h3_span:first-child]:whitespace-nowrap [&_h2]:mt-[50px]"
            >
              {renderBlock(introBlock, 0)}
            </div>
          ) : null}

          <section className="mt-[7rem] mb-[10rem] md:space-y-10">
            {renderThemedHeadingFromBlock(executiveHeadingBlock)}
            <div className="mt-[2rem] md:mt-[2.5rem]">
              {renderEntriesGrid(executiveEntries, 'executive-office')}
            </div>
          </section>

          <section className="mb-[7rem]  md:mb-[122px] md:space-y-10">
            {renderThemedHeadingFromBlock(membersHeadingBlock)}
            <div className="mt-[2rem] md:mt-[2.5rem]">
              {renderEntriesGrid(memberEntries, 'our-members')}
            </div>
          </section>

          {activitiesBlocks.map((block, idx) => (
            <div key={`activities-${idx}`}>{renderBlock(block, idx + 100)}</div>
          ))}

          {activities.length > 0 ? (
            activities.map((activity, idx) => (
              <JewelryActivitySection
                key={`activity-entry-${idx}`}
                header={activity.header}
                content={activity.content}
                image={activity.activityImage}
                index={idx}
                locale={locale}
                variant={ACTIVITY_SECTION_VARIANT}
              />
            ))
          ) : (
            <p className="text-gray-400">No activity entries found.</p>
          )}
        </div>

        {(!Array.isArray(entries) || entries.length === 0) && (
          <p className="mt-[60px] text-center text-gray-500">
            No entries found for the Department of Goldsmithing and Jewelry.
          </p>
        )}
      </div>
    </div>
  );
};

export default GoldAndJewellerySectionPage;
