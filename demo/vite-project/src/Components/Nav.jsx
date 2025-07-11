
import React from 'react';
import '../Style/Nav.css';

export default function Nav({ toggleFilter ,setSearchTerm ,searchTerm, }) {
  return (
    <nav className="navbar">
      <h1>Employee Directory</h1>
      <input
        className='seo'
          type="text"
          placeholder="Search by name or email"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      <button className="filter-btn" onClick={toggleFilter}>Filter</button>
    </nav>
  );
}

