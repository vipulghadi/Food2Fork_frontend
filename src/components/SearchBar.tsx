import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter ingredients (e.g., tomato, chili)"
          className="w-full px-4 py-3 pl-12 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
        <button
          type="submit"
          className="absolute right-2 top-2 px-4 py-1.5 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
        >
          Search
        </button>
      </div>
    </form>
  );
}