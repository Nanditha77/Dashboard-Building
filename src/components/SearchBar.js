// SearchBar.js - Updated to work with onSearch prop
import React, { useState } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';
import './SearchBar.css';

const SearchBar = ({ placeholder = "Search widgets...", onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isActive, setIsActive] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    // Send search term to parent component (Header -> App -> Widget)
    if (onSearch) {
      onSearch(value);
    }
  };

  const handleClearSearch = () => {
    setSearchTerm('');
    setIsActive(false);
    
    // Clear search in parent component
    if (onSearch) {
      onSearch('');
    }
  };

  const handleFocus = () => {
    setIsActive(true);
  };

  const handleBlur = () => {
    if (!searchTerm) {
      setIsActive(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="search-bar-container">
      <form className={`search-bar ${isActive || searchTerm ? 'active' : ''}`} onSubmit={handleSubmit}>
        <div className="search-input-wrapper">
          <input
            type="text"
            className="search-input"
            placeholder={placeholder}
            value={searchTerm}
            onChange={handleInputChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          {searchTerm && (
            <button
              type="button"
              className="clear-search-btn"
              onClick={handleClearSearch}
              title="Clear search"
            >
              <FaTimes />
            </button>
          )}
        </div>
      </form>
      
      {searchTerm && (
        <div className="search-results-info">
          <span className="search-results-text">
            Searching for: <strong>"{searchTerm}"</strong>
          </span>
          <button 
            className="clear-results-btn"
            onClick={handleClearSearch}
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchBar;