// SearchBar.tsx
import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (searchText: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    if (searchText.trim() !== '') {
      onSearch(searchText);
    }
  };

  return (
    <div className="flex items-center justify-center mt-10">
      <div className="flex items-center rounded-full border-2 border-neutral-content bg-base p-4 shadow-neutral-content shadow-inner">
        <input
          type="text"
          placeholder="Deep dive..."
          className="w-72 sm:w-96 px-4 py-2 focus:outline-none bg-transparent"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleSearch();
            }
          }}
        />
        <button
          className="ml-2 px-4 py-2 text-white rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 focus:ring focus:ring-offset-2 focus:ring-offset-gray-300 focus:ring-blue-400 focus:outline-none"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
