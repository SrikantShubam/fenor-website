import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import { createClient, ContentfulClientApi } from 'contentful';
import { motion } from 'framer-motion';
import { unstable_cache } from 'next/cache';

import SEOComponent from '@/components/SEOComponent';
import TextBoxWithImage from '../components/textbox-variations/TextBoxWithImage';
import ManagementCard from '../components/ManagementCard';
import { client } from '../tina/__generated__/client';
import { PagesBlocks } from '../tina/__generated__/types';

const getContentfulClient = (): ContentfulClientApi<undefined> | null => {
  const space = process.env.CONTENTFUL_SPACE_ID;
  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;
  if (!space || !accessToken) return null;
  return createClient({
    space,
    accessToken,
    environment: process.env.CONTENTFUL_ENVIRONMENT || 'master',
  });
};

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
  name_en?: string;
  name_fr?: string;
  name_ar?: string;
  nameEn?: string;
  nameFr?: string;
  nameAr?: string;
  name?: string;
  memberName?: string;
  designation_en?: string;
  designation_fr?: string;
  designation_ar?: string;
  designationEn?: string;
  designationFr?: string;
  designationAr?: string;
  designation?: string;
  role?: string;
  title?: string;
  DepartmentName?: string | string[];
  departmentName?: string | string[];
  departmentNames?: string | string[];
  department_name?: string | string[];
  profileImg?: { fields: { file: { url: string } } };
  profileImage?: { fields: { file: { url: string } } };
  image?: { fields: { file: { url: string } } };
  whatsapp?: string;
  whatsappUrl?: string;
  whatsapp_url?: string;
  linkedinUrl?: string;
  linkedin_url?: string;
  linkedin?: string;
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
  whatsappUrl?: string;
  linkedinUrl?: string;
  departmentNames: string[];
  isExecutive: boolean;
  orderValue: number | null;
  sourceIndex: number;
}

interface GoldJewelleryPageProps {
  content: Content;
  entries: JewelryCraftingEntry[];
  locale: string;
}

type TextHeadingBlock = Extract<PagesBlocks, { __typename?: 'PagesBlocksText' }>;
type TextBoxWithImageBlock = Extract<PagesBlocks, { __typename?: 'PagesBlocksTextBoxWithImage' }>;
type DepartmentBucket = 'gold' | 'zoueratt' | 'chami' | null;
const DEPARTMENT_EXTRA_TOP_MARGIN: Partial<Record<Exclude<DepartmentBucket, null>, string>> = {
  zoueratt: 'mt-[6rem] md:mt-[14rem]',
  chami: 'mt-[4rem] md:mt-[14rem]',
};

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

const compactText = (value: string): string =>
  value
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\u0600-\u06ff]+/g, '');

const normalizeDepartmentNames = (value: unknown): string[] => {
  if (Array.isArray(value)) {
    return value
      .map((item) => (typeof item === 'string' ? item.trim() : ''))
      .filter(Boolean);
  }
  if (typeof value === 'string' && value.trim()) {
    return [value.trim()];
  }
  return [];
};

const toNonEmptyString = (value: unknown): string | undefined => {
  if (typeof value !== 'string') return undefined;
  const trimmed = value.trim();
  return trimmed ? trimmed : undefined;
};

const ZOUERAT_MATCH_KEYS = ['zouerat', 'zuerat', 'zoueratt', 'ازويرات', 'الزويرات', 'زويرات'];
const isZouerattDepartmentName = (name: string): boolean => {
  const key = compactText(name);
  return ZOUERAT_MATCH_KEYS.some((candidate) => key.includes(candidate));
};
const CHAMI_MATCH_KEYS = ['chami', 'الشامي', 'شامي'];
const isChamiDepartmentName = (name: string): boolean => {
  const key = compactText(name);
  return CHAMI_MATCH_KEYS.some((candidate) => key.includes(candidate));
};
const isGoldDepartmentName = (name: string): boolean => {
  const key = compactText(name);
  return (
    key.includes('goldsmithingandjewelry') ||
    key.includes('departmentofgoldsmithingandjewelry') ||
    key.includes('goldandjewelry') ||
    key.includes('orfevrerieetdebijouterie') ||
    key.includes('صياغةالذهبوالمجوهرات')
  );
};

const detectDepartmentFromText = (text: string): DepartmentBucket => {
  const key = compactText(text);
  if (ZOUERAT_MATCH_KEYS.some((candidate) => key.includes(candidate))) return 'zoueratt';
  if (CHAMI_MATCH_KEYS.some((candidate) => key.includes(candidate))) return 'chami';
  if (
    key.includes('goldsmithingandjewelry') ||
    key.includes('goldandjewelry') ||
    key.includes('orfevrerieetdebijouterie') ||
    key.includes('صياغةالذهبوالمجوهرات')
  ) {
    return 'gold';
  }
  return null;
};

const isExecutiveHeadingText = (text: string): boolean => {
  const key = compactText(text);
  return key.includes('executive') || key.includes('executif') || key.includes('تنفيذي');
};

const isMembersHeadingText = (text: string): boolean => {
  const key = compactText(text);
  return (
    key.includes('member') ||
    key.includes('membre') ||
    key.includes('membres') ||
    key.includes('اعضاء') ||
    key.includes('أعضاء')
  );
};

const getDepartmentTopMarginClass = (department: DepartmentBucket): string => {
  if (!department || department === 'gold') return '';
  return DEPARTMENT_EXTRA_TOP_MARGIN[department] || '';
};

export const getStaticProps: GetStaticProps<GoldJewelleryPageProps> = async ({ locale }) => {
  let tinaContent: Content = {
    title: 'Departments',
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
      title: rawContent.title || 'Departments',
      seo: Object.keys(seoTemp).length > 0 ? seoTemp : null,
      blocks: rawContent.blocks || [],
    };
  } catch (error) {
    console.error('Tina fetch error (Department of Goldsmithing and Jewelry):', error);
  }

  let entries: JewelryCraftingEntry[] = [];
  try {
    const contentfulClient = getContentfulClient();
    if (!contentfulClient) {
      console.warn('Skipping Contentful fetch for departments: missing CONTENTFUL_SPACE_ID or CONTENTFUL_ACCESS_TOKEN');
      return {
        props: {
          content: tinaContent,
          entries,
          locale: locale || 'en',
        },
        revalidate: 86400,
      };
    }

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
        return (
          contentTypeId.includes('jewel') ||
          contentTypeId.includes('craft') ||
          contentTypeId.includes('department')
        );
      });
    };

    const items =
      process.env.NODE_ENV === 'development'
        ? await fetchItems()
        : await unstable_cache(fetchItems, [`jewelry-crafting-section-${locale}`], {
            revalidate: 86400,
          })();

    entries = items.map((item, sourceIndex) => {
      const fields = item.fields as JewelryCraftingFields;
      const localeNameField = `name_${langSuffix}` as keyof JewelryCraftingFields;
      const localeDesignationField = `designation_${langSuffix}` as keyof JewelryCraftingFields;
      const orderValue = normalizeOrderValue(
        fields.orderId ?? fields.OrderId ?? fields.displayOrder
      );

      const nameRaw =
        fields[`name${localeKey}` as keyof JewelryCraftingFields] ||
        fields[localeNameField] ||
        (langSuffix === 'fr' ? fields.nameFr : langSuffix === 'ar' ? fields.nameAr : fields.nameEn) ||
        fields.nameEn ||
        fields.nameFr ||
        fields.nameAr ||
        fields.name ||
        fields.memberName;
      const designationRaw =
        fields[`designation${localeKey}` as keyof JewelryCraftingFields] ||
        fields[localeDesignationField] ||
        (langSuffix === 'fr'
          ? fields.designationFr
          : langSuffix === 'ar'
            ? fields.designationAr
            : fields.designationEn) ||
        fields.designationEn ||
        fields.designationFr ||
        fields.designationAr ||
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

      const departmentNames = normalizeDepartmentNames(
        fields.DepartmentName ?? fields.departmentName ?? fields.departmentNames ?? fields.department_name
      );

      const whatsappUrl = toNonEmptyString(
        fields.whatsappUrl ?? fields.whatsapp ?? fields.whatsapp_url
      );
      const linkedinUrl = toNonEmptyString(
        fields.linkedinUrl ?? fields.linkedin ?? fields.linkedin_url
      );

      return {
        name: typeof nameRaw === 'string' ? nameRaw : String(nameRaw ?? 'No Name'),
        designation:
          typeof designationRaw === 'string'
            ? designationRaw
            : designationRaw
              ? String(designationRaw)
              : undefined,
        ...(profileImg ? { profileImg } : {}),
        ...(whatsappUrl ? { whatsappUrl } : {}),
        ...(linkedinUrl ? { linkedinUrl } : {}),
        departmentNames,
        isExecutive: normalizeBool(fields.isExecutive ?? fields.isexecutive ?? fields.executive),
        orderValue,
        sourceIndex,
      };
    });
  } catch (error) {
    console.error('Contentful fetch error (jewelryCraftingSection):', error);
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

const GoldAndJewellerySectionPage: NextPage<GoldJewelleryPageProps> = ({
  content,
  entries,
  locale,
}) => {
  const blocks = content.blocks || [];
  const sortEntriesForSection = (list: JewelryCraftingEntry[]): JewelryCraftingEntry[] =>
    [...list].sort((a, b) => {
      if (a.orderValue !== null && b.orderValue !== null) {
        if (a.orderValue !== b.orderValue) return a.orderValue - b.orderValue;
        return a.sourceIndex - b.sourceIndex;
      }
      if (a.orderValue !== null) return -1;
      if (b.orderValue !== null) return 1;
      return a.sourceIndex - b.sourceIndex;
    });

  const textBoxWithImageBlocks = blocks.filter(
    (block): block is TextBoxWithImageBlock => block.__typename === 'PagesBlocksTextBoxWithImage'
  );
  const introBlock = textBoxWithImageBlocks[0];

  const goldDepartmentEntries = sortEntriesForSection(
    entries.filter((entry) => {
      if (!entry.departmentNames.length) return true;
      return entry.departmentNames.some(isGoldDepartmentName);
    })
  );

  const executiveEntries = sortEntriesForSection(
    goldDepartmentEntries.filter((entry) => entry.isExecutive)
  );
  const memberEntries = sortEntriesForSection(
    goldDepartmentEntries.filter((entry) => !entry.isExecutive)
  );
  const zouerattEntries = sortEntriesForSection(
    entries.filter((entry) => entry.departmentNames.some(isZouerattDepartmentName))
  );
  const chamiEntries = sortEntriesForSection(
    entries.filter((entry) => entry.departmentNames.some(isChamiDepartmentName))
  );

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
            whatsappUrl={entry.whatsappUrl}
            linkedinUrl={entry.linkedinUrl}
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

  const sectionHeadingBlocks = blocks.flatMap((block, idx) => {
    if (block.__typename !== 'PagesBlocksText') return [];
    const heading = extractPlainText(block.content).replace(/\s+/g, ' ').trim();
    if (!heading) return [];
    return [{ block, idx, heading }];
  });
  const executiveHeading =
    sectionHeadingBlocks.find((item) => isExecutiveHeadingText(item.heading)) || sectionHeadingBlocks[0];
  const executiveHeadingBlock = executiveHeading?.block;
  const executiveHeadingIndex = executiveHeading?.idx;

  const membersHeading =
    memberEntries.length > 0
      ? sectionHeadingBlocks.find((item) => {
          if (item.idx === executiveHeadingIndex) return false;
          if (isExecutiveHeadingText(item.heading)) return false;
          const headingDepartment = detectDepartmentFromText(item.heading);
          if (headingDepartment === 'zoueratt' || headingDepartment === 'chami') return false;
          return isMembersHeadingText(item.heading);
        })
      : undefined;
  const membersHeadingBlock = membersHeading?.block;
  const membersHeadingIndex = membersHeading?.idx;
  const reservedHeadingIndices = new Set<number>(
    [executiveHeadingIndex, membersHeadingIndex].filter(
      (value): value is number => typeof value === 'number'
    )
  );

  const renderSupplementaryBlocks = () => {
    let seenTextWithImageBlocks = 0;
    let activeDepartment: DepartmentBucket = null;

    return blocks.map((block, idx) => {
      if (block.__typename === 'PagesBlocksText') {
        if (reservedHeadingIndices.has(idx)) return null;

        const heading = extractPlainText(block.content).replace(/\s+/g, ' ').trim();
        if (!heading) return null;
        const headingDepartment = detectDepartmentFromText(heading);
        const resolvedDepartment = headingDepartment || activeDepartment;
        const listForBlock = isExecutiveHeadingText(heading)
          ? executiveEntries
          : resolvedDepartment === 'zoueratt'
            ? zouerattEntries
            : resolvedDepartment === 'chami'
              ? chamiEntries
              : memberEntries;

        return (
          <section key={`extra-text-${idx}`} className="mb-[3rem] md:mb-[4rem] md:space-y-10">
            {renderThemedHeadingFromBlock(block)}
            <div className="mt-[2rem] md:mt-[2.5rem]">
              {renderEntriesGrid(listForBlock, `supplementary-${resolvedDepartment || 'gold'}-${idx}`)}
            </div>
          </section>
        );
      }

      if (block.__typename === 'PagesBlocksTextBoxWithImage') {
        seenTextWithImageBlocks += 1;
        if (seenTextWithImageBlocks === 1) return null;

        activeDepartment = detectDepartmentFromText(
          `${block.smallHeading || ''} ${block.bigHeading || ''}`
        );
        const departmentTopMarginClass = getDepartmentTopMarginClass(activeDepartment);

        return (
          <div
            key={`department-text-${idx}`}
            className={`${departmentTopMarginClass} mb-[12px] md:mb-[24px] [&_h3]:mb-3 md:[&_h3]:mb-4 [&_h3_span:last-child]:block [&_h3_span:last-child]:mt-0 md:[&_h3_span:first-child]:whitespace-nowrap [&_h2]:mt-[50px]`}
          >
            <TextBoxWithImage
              smallHeading={block.smallHeading || undefined}
              bigHeading={block.bigHeading || undefined}
              paragraph={block.paragraph || undefined}
            />
          </div>
        );
      }

      return null;
    });
  };

  return (
    <div className="departments" lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <SEOComponent
        title={content.seo?.title || content.title || 'Departments'}
        description={
          content.seo?.description ||
          "Explore FENOR's departments, from executive leadership to member craftsmanship."
        }
        canonicalPath={`/${locale}/departments`}
      />

      <div className="container mx-auto py-[30px]">
        <div className="space-y-[80px] md:space-y-[130px]">
          {introBlock ? (
            <div
              className="mb-[52px] md:mb-[64px] [&_h3]:mb-3 md:[&_h3]:mb-4 [&_h3_span:last-child]:block [&_h3_span:last-child]:mt-0 md:[&_h3_span:first-child]:whitespace-nowrap [&_h2]:mt-[50px]"
            >
              <TextBoxWithImage {...introBlock} />
            </div>
          ) : null}

          <section className="mt-[1rem] mb-[10rem] md:space-y-10">
            {renderThemedHeadingFromBlock(executiveHeadingBlock)}
            <div className="mt-[2rem] md:mt-[2.5rem]">
              {renderEntriesGrid(executiveEntries, 'executive-office')}
            </div>
          </section>

          {membersHeadingBlock && memberEntries.length > 0 ? (
            <section className="mb-[7rem]  md:mb-[122px] md:space-y-10">
              {renderThemedHeadingFromBlock(membersHeadingBlock)}
              <div className="mt-[2rem] md:mt-[2.5rem]">
                {renderEntriesGrid(memberEntries, 'our-members')}
              </div>
            </section>
          ) : null}

          {renderSupplementaryBlocks()}
        </div>

        {(!Array.isArray(entries) || entries.length === 0) && (
          <p className="mt-[60px] text-center text-gray-500">
            No entries found for Departments.
          </p>
        )}
      </div>
    </div>
  );
};

export default GoldAndJewellerySectionPage;
