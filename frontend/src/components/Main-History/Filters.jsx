import React from "react";

const Filters = ({ filter, setFilter, search, setSearch }) => {
  const FILTERS = ["All", "Completed", "Upcoming", "Pending", "Cancelled"];
  return (
    <div className="filter-row">
      <div className="search-wrap">
        <span className="search-icon">🔍</span>
        <input
          className="search-input"
          placeholder="Search by doctor or specialty…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {FILTERS.map((f) => (
        <button
          key={f}
          className={`filter-chip${filter === f ? " active" : ""}`}
          onClick={() => setFilter(f)}
        >
          {f}
        </button>
      ))}
      <select className="sort-select">
        <option>Newest first</option>
        <option>Oldest first</option>
        <option>By rating</option>
      </select>
    </div>
  );
};

export default Filters;
