
import React, { useState } from 'react';
import './Search.css'

const Search = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Karakter ara..."
        className="input"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button className='button' onClick={handleSearch}>Ara</button>
    </div>
  );
};

export default Search;
