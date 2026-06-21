import global from './defaults/global.json';
import home from './defaults/home.json';
import aboutIndex from './defaults/about-index.json';
import aboutProfile from './defaults/about-profile.json';
import aboutWhyUs from './defaults/about-whyus.json';
import aboutTeam from './defaults/about-team.json';
import manufacturingIndex from './defaults/manufacturing-index.json';
import manufacturingFactory from './defaults/manufacturing-factory.json';
import manufacturingCapacity from './defaults/manufacturing-capacity.json';
import manufacturingLines from './defaults/manufacturing-lines.json';
import manufacturingEngineering from './defaults/manufacturing-engineering.json';
import solutionsIndex from './defaults/solutions-index.json';
import solutionsCustomization from './defaults/solutions-customization.json';
import solutionsProcess from './defaults/solutions-process.json';
import qualityIndex from './defaults/quality-index.json';
import qualityProcess from './defaults/quality-process.json';
import qualityReliability from './defaults/quality-reliability.json';
import qualityCertifications from './defaults/quality-certifications.json';
import faq from './defaults/faq.json';
import contact from './defaults/contact.json';
import blog from './defaults/blog.json';
import blogSingle from './defaults/blog-single.json';
import productsIndex from './defaults/products-index.json';
import productsDetail from './defaults/products-detail.json';

export const defaultSiteContent = {
  schemaVersion: 1,
  global,
  pages: {
    home,
    about: {
      index: aboutIndex,
      profile: aboutProfile,
      whyUs: aboutWhyUs,
      team: aboutTeam,
    },
    manufacturing: {
      index: manufacturingIndex,
      factory: manufacturingFactory,
      capacity: manufacturingCapacity,
      lines: manufacturingLines,
      engineering: manufacturingEngineering,
    },
    solutions: {
      index: solutionsIndex,
      customization: solutionsCustomization,
      process: solutionsProcess,
    },
    quality: {
      index: qualityIndex,
      process: qualityProcess,
      reliability: qualityReliability,
      certifications: qualityCertifications,
    },
    faq,
    contact,
    blog,
    blogSingle,
    products: {
      index: productsIndex,
      detail: productsDetail,
    },
  },
};

export type SiteContent = typeof defaultSiteContent;

const API_BASE = process.env.NEXT_PUBLIC_WP_API_BASE || 'https://server.ibocode.com';
const API_ROOT = API_BASE.replace(/\/$/, '');
const SITE_CONTENT_URL = `${API_ROOT}/wp-json/cosun/v1/site-content`;

const isPlainObject = (value: unknown): value is Record<string, unknown> => {
  return Boolean(value) && typeof value === 'object' && !Array.isArray(value);
};

const hasBackendPayload = (value: unknown): value is SiteContent => {
  if (!isPlainObject(value)) {
    return false;
  }

  const hasGlobal = Object.prototype.hasOwnProperty.call(value, 'global');
  const hasPages = Object.prototype.hasOwnProperty.call(value, 'pages');
  return hasGlobal || hasPages;
};

const mergeDeep = <T>(base: T, override: unknown): T => {
  if (Array.isArray(base)) {
    return (Array.isArray(override) ? override : base) as T;
  }

  if (isPlainObject(base)) {
    const output: Record<string, unknown> = { ...base };
    if (isPlainObject(override)) {
      Object.keys(override).forEach((key) => {
        output[key] = mergeDeep(base[key as keyof typeof base], override[key]);
      });
    }
    return output as T;
  }

  return (typeof override === 'undefined' ? base : override) as T;
};

export const fetchSiteContent = async (): Promise<SiteContent> => {
  try {
    const response = await fetch(SITE_CONTENT_URL, {
      headers: {
        Accept: 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`);
    }
    const data = (await response.json()) as unknown;
    if (!hasBackendPayload(data)) {
      return defaultSiteContent;
    }
    return mergeDeep(defaultSiteContent, data);
  } catch (error) {
    return defaultSiteContent;
  }
};
