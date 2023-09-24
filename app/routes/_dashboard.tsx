import { useState } from 'react';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { useTranslation } from 'react-i18next';
import SearchBar from '~/components/searchBar';
import SearchCard from '~/components/grid';
import ImageContainer from '~/components/logo';
import type { V2_MetaFunction } from '@remix-run/cloudflare';
import Chatbot from '~/components/test';
import CashFlowDashboard from '~/components/dashboard';


export const meta: V2_MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};


export default function Index() {
  const { t, i18n } = useTranslation();




  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      {/* Example of using a translation string, 
      Note: if it fails to load the translation file, it will fallback to the key name (the content inside the brackets withouth the ") */}
      <ImageContainer imageUrl="/staticcontent/logo.png" />
      <CashFlowDashboard />
           
    </div>
  );
}