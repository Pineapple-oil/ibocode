'use client';

import React from 'react';
import { SiteContentProvider } from '../content/SiteContentContext';
import { QuoteModalProvider } from './QuoteModal';

export const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <SiteContentProvider>
      <QuoteModalProvider>{children}</QuoteModalProvider>
    </SiteContentProvider>
  );
};
