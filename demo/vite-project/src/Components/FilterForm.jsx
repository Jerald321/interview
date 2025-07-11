import React from 'react';
import '../Style/FilterForm.css';

export default function FilterForm({ filters, setFilters, applyFilters, resetFilters }) {
  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="filter-form">
      <h3>Filter Employees</h3>
      <label>
        First Name:
        <input type="text" name="firstName" value={filters.firstName} onChange={handleChange} />
      </label>
      <label>
        Department:
        <input type="text" name="department" value={filters.department} onChange={handleChange} />
      </label>
      <label>
        Role:
        <input type="text" name="role" value={filters.role} onChange={handleChange} />
      </label>
      <div className="filter-buttons">
        <button onClick={applyFilters}>Apply</button>
        <button onClick={resetFilters}>Reset</button>
      </div>
    </div>
  );
}
