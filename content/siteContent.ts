import global from '../wp-plugin/cosun-headless-content/default-content/global.json';
import home from '../wp-plugin/cosun-headless-content/default-content/home.json';
import aboutIndex from '../wp-plugin/cosun-headless-content/default-content/about-index.json';
import aboutProfile from '../wp-plugin/cosun-headless-content/default-content/about-profile.json';
import aboutWhyUs from '../wp-plugin/cosun-headless-content/default-content/about-whyus.json';
import aboutTeam from '../wp-plugin/cosun-headless-content/default-content/about-team.json';
import manufacturingIndex from '../wp-plugin/cosun-headless-content/default-content/manufacturing-index.json';
import manufacturingFactory from '../wp-plugin/cosun-headless-content/default-content/manufacturing-factory.json';
import manufacturingCapacity from '../wp-plugin/cosun-headless-content/default-content/manufacturing-capacity.json';
import manufacturingLines from '../wp-plugin/cosun-headless-content/default-content/manufacturing-lines.json';
import manufacturingEngineering from '../wp-plugin/cosun-headless-content/default-content/manufacturing-engineering.json';
import solutionsIndex from '../wp-plugin/cosun-headless-content/default-content/solutions-index.json';
import solutionsCustomization from '../wp-plugin/cosun-headless-content/default-content/solutions-customization.json';
import solutionsProcess from '../wp-plugin/cosun-headless-content/default-content/solutions-process.json';
import qualityIndex from '../wp-plugin/cosun-headless-content/default-content/quality-index.json';
import qualityProcess from '../wp-plugin/cosun-headless-content/default-content/quality-process.json';
import qualityReliability from '../wp-plugin/cosun-headless-content/default-content/quality-reliability.json';
import qualityCertifications from '../wp-plugin/cosun-headless-content/default-content/quality-certifications.json';
import faq from '../wp-plugin/cosun-headless-content/default-content/faq.json';
import contact from '../wp-plugin/cosun-headless-content/default-content/contact.json';
import blog from '../wp-plugin/cosun-headless-content/default-content/blog.json';
import blogSingle from '../wp-plugin/cosun-headless-content/default-content/blog-single.json';
import productsIndex from '../wp-plugin/cosun-headless-content/default-content/products-index.json';
import productsDetail from '../wp-plugin/cosun-headless-content/default-content/products-detail.json';

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

const API_BASE = import.meta.env.VITE_WP_API_BASE || 'https://server.cosunglobal.com';
const API_ROOT = API_BASE.replace(/\/$/, '');
const SITE_CONTENT_URL = `${API_ROOT}/wp-json/cosun/v1/site-content`;

const isPlainObject = (value: unknown): value is Record<string, unknown> => {
  return Boolean(value) && typeof value === 'object' && !Array.isArray(value);
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
    const data = (await response.json()) as SiteContent;
    return mergeDeep(defaultSiteContent, data);
  } catch (error) {
    return defaultSiteContent;
  }
};
