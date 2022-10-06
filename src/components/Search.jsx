import React from 'react';
import '../styles/components/Search.scss';

export default function Search({ search, handleSearch, searchInput }) {
  return (
    <div className="search">
      <input
        className="input-search"
        value={search}
        onChange={handleSearch}
        ref={searchInput}
        placeholder="Busca..."
        type="text"
      />
    </div>
  );
}
