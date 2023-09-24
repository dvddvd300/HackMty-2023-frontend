// SearchCard.tsx
import React from 'react';

interface SearchCardProps {
  title: string;
  description: string;
}

const SearchCard: React.FC<SearchCardProps> = ({ title, description }) => {
  return (
    <div className="bg-base-200 shadow-lg p-4 rounded-md transition duration-300 transform hover:scale-105">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-base-content">{description}</p>
    </div>
  );
};
export default SearchCard;
