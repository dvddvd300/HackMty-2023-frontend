import React from 'react';
import { useState } from 'react';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { useTranslation } from 'react-i18next';

import type { V2_MetaFunction } from '@remix-run/cloudflare';

import MktingDashboard from '../components/mktingdashboard';

export const meta: V2_MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function HRDashboardPage() {
  const { t, i18n } = useTranslation();

  const handleSearch = (searchText: string): void => {
    throw new Error('Function not implemented.');
  };

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }} className="p-4">
      <MktingDashboard/>
    </div>
  );
}