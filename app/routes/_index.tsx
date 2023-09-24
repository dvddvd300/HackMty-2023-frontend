import { useState } from 'react';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { useTranslation } from 'react-i18next';
import SearchBar from '~/components/searchBar';
import SearchCard from '~/components/grid';
import ImageContainer from '~/components/logo';
import type { V2_MetaFunction } from '@remix-run/cloudflare';
import Chatbot from '~/components/test';

export const meta: V2_MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

const recommendedSearches = [
  {
    title: 'Recommended Search 1',
    description: 'Description for recommended search 1.',
  },
  {
    title: 'Recommended Search 2',
    description: 'Description for recommended search 2.',
  },
  {
    title: 'Recommended Search 3',
    description: 'Description for recommended search 3.',
  },
  {
    title: 'Recommended Search 4',
    description: 'Description for recommended search 4.',
  },
];

export default function Index() {
  const { t } = useTranslation();


  const handleSearch = (searchText: string): void => {
    throw new Error('Function not implemented.');
  };


  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      {/* Example of using a translation string, 
      Note: if it fails to load the translation file, it will fallback to the key name (the content inside the brackets withouth the ") */}
      <ImageContainer imageUrl="/staticcontent/logo.png" />
      <Chatbot />
      
      <SearchBar onSearch={handleSearch} />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 sm:gap-4 md:gap-4 lg:gap-4 gap-4 mx-4 sm:mx-8 md:mx-16 lg:mx-32 2xl:mx-80 mt-8">
        {recommendedSearches.map((search, index) => (   
          <SearchCard key={index} title={search.title} description={search.description} />
        ))}
      </div>
    </div>
  );
}