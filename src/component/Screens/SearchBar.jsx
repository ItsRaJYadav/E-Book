import React, { useState } from 'react';

function SearchBar({ handleSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
    handleSearch(e.target.value);
  };

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-button"
        value={searchQuery}
        onChange={handleInputChange}
      />
      <button
        className="btn btn-outline-secondary"
        type="button"
        id="search-button"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
