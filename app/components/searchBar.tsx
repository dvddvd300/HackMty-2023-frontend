import { Container } from '@mui/material';
import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (searchText: string) => void;
  onUpload: (fileContent: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, onUpload }) => {
  const [searchText, setSearchText] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [responseText, setResponseText] = useState<string>('');

  const handleSearch = () => {
    if (searchText.trim() !== '') {
      onSearch(searchText);
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];

    if (selectedFile) {
      const reader = new FileReader();

      reader.onload = async (event) => {
        const fileContent = event.target?.result as string;
        onUpload(fileContent);
        let fileContentM = fileContent + "Analyze Total Revenue, total expenses, net income, and some recommendations about the company's financial health. Perform needed calculations with numerical value";
        let fetchData = await fetch('/api/files', {
          method: "POST",
          body: fileContentM,
          headers: {
            "Content-Type": "text/plain"
          }

        });
        if (fetchData.ok) {
          const response = await fetchData.text();
          console.log(response);
          setResponseText(response);
        }
      };

      reader.readAsText(selectedFile);
      setFile(selectedFile);
    }
  };

  return (
    <div className="flex flex-col items-center">
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
      <div className="container mt-4 bg-base-200">
        <p className="bg-base-200 rounded-lg p-4 ">{responseText}</p>
      </div>
    </div>
  );
};

export default SearchBar;
