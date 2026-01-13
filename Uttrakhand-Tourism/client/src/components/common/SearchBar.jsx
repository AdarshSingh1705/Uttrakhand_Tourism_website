import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/destinations?search=${query}`);
      setQuery('');
      onClose();
    }
  };

  return (
    <form className={`search-bar-container ${isOpen ? 'active' : ''}`} onSubmit={handleSearch}>
      <input
        type="search"
        id="search-bar"
        placeholder="Search for destinations...."
        autoComplete="off"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <label htmlFor="search-bar" className="fas fa-search" onClick={handleSearch}></label>
    </form>
  );
};

export default SearchBar;
