import React from 'react';

export interface NavItem {
  label: string;
  path: string;
  subItems?: NavItem[];
}

export interface FeatureProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}