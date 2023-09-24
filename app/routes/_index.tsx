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
    { title: 'AI SUITE' },
    { name: 'description', content: 'Welcome to AISuite!' },
  ];
};

const recommendedSearches = [
  {
    title: 'Human Resources',
    description: 'Talent acquisition and recruitment, employee relations and conflict resolution, training and development programs, and managing payroll and benefits.',
  },
  {
    title: 'Finance and Accounting',
    description: 'Predicting future financial trends, detecting fraud, optimizing investments, and assessing and mitigating risks.',
  },
  {
    title: 'Sales and Marketing',
    description: 'Understanding customer sentiment, tracking social media engagement and trends, conducting market research and competitive analysis.',
  },
  {
    title: 'Operations',
    description: 'Optimizing production processes, enhancing supply chain management, improving facilities management, and automating routine tasks for efficiency.',
  },
];

export default function Index() {
  const { t, i18n } = useTranslation();


  const handleSearch = (searchText: string): void => {
    throw new Error('Function not implemented.');
  };



  function handleFileUpload(fileContent: string): void {
    console.log('Uploaded file content:', fileContent);
  }

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      {/* Example of using a translation string, 
      Note: if it fails to load the translation file, it will fallback to the key name (the content inside the brackets withouth the ") */}
      <ImageContainer imageUrl="/staticcontent/logo.png" />
      
      
      <SearchBar onSearch={handleSearch} onUpload={handleFileUpload} />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 sm:gap-4 md:gap-4 lg:gap-4 gap-4 mx-4 sm:mx-8 md:mx-16 lg:mx-32 2xl:mx-80 mt-8">
        {recommendedSearches.map((search, index) => (   
          <SearchCard key={index} title={search.title} description={search.description} />
        ))}
      </div>
    </div>
    
  );
}