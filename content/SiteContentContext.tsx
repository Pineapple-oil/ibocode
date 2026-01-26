import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { defaultSiteContent, fetchSiteContent, SiteContent } from './siteContent';

const SiteContentContext = createContext<SiteContent>(defaultSiteContent);

export const SiteContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<SiteContent>(defaultSiteContent);

  useEffect(() => {
    let isActive = true;
    fetchSiteContent()
      .then((data) => {
        if (isActive) {
          setContent(data);
        }
      })
      .catch(() => {
        if (isActive) {
          setContent(defaultSiteContent);
        }
      });

    return () => {
      isActive = false;
    };
  }, []);

  const value = useMemo(() => content, [content]);

  return <SiteContentContext.Provider value={value}>{children}</SiteContentContext.Provider>;
};

export const useSiteContent = () => useContext(SiteContentContext);
