import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (searchText: string) => void;
  onUpload: (fileContent: string) => void; // Add a callback for handling uploaded files
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, onUpload }) => {
  const [searchText, setSearchText] = useState('');
  const [file, setFile] = useState<File | null>(null); // Store the uploaded file

  const handleSearch = () => {
    if (searchText.trim() !== '') {
      onSearch(searchText);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];

    if (selectedFile) {
      const reader = new FileReader();

      reader.onload = (event) => {
        const fileContent = event.target?.result as string;
        onUpload(fileContent);
      };

      reader.readAsText(selectedFile);
      setFile(selectedFile);
    }
  };

  return (
    <div className="flex items-center justify-center mt-10">
      <div className="flex items-center rounded-full border-2 border-neutral-content bg-base p-4 shadow-neutral-content shadow-inner">
        <label className="cursor-pointer">
          <input
            type="file"
            accept=".txt"
            className="hidden"
            onChange={handleFileUpload}
          />
          <span className="ml-2 px-4 py-2 text-white rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 focus:ring focus:ring-offset-2 focus:ring-offset-gray-300 focus:ring-blue-400 focus:outline-none">
            Upload .txt File
          </span>
        </label>
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
      </div>
    </div>
  );
};

export default SearchBar;
