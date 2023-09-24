import { useState } from 'react';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { useTranslation } from 'react-i18next';
import SearchBar from '~/components/searchBar';
import SearchCard from '~/components/grid';
import ImageContainer from '~/components/logo';
import type { V2_MetaFunction } from '@remix-run/cloudflare';

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
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
      <ImageContainer imageUrl="https://i.postimg.cc/1346H11V/logo-without-text-ai-suite.png" />

      <SearchBar onSearch={handleSearch} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 ml-80 mr-80">
        {recommendedSearches.map((search, index) => (   
          <SearchCard key={index} title={search.title} description={search.description} />
        ))}
      </div>
    </div>
  );
}