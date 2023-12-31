// SearchCard.tsx

import React from 'react';
import { Link } from "@remix-run/react";


interface SearchCardProps {
  title: string;
  description: string;
  route: string;
}

const SearchCard: React.FC<SearchCardProps> = ({ title, description , route}) => {
  return (
    <div className="bg-base-200 shadow-lg p-4 rounded-md transition duration-300 transform hover:scale-105">
      <Link to={route}><h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-base-content">{description}</p>
      </Link>
    </div>
  );
};

export default SearchCard;
