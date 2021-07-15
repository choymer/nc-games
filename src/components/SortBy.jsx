import React, { useEffect, useState } from "react";

const SortBy = ({ setSortBy }) => {
  const handle = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <div>
      <p>Sort By:</p>
      <input
        onChange={(e) => handle(e)}
        type="radio"
        id="created_at"
        name="sortGroup"
        value="created_at"
      />
      <label htmlFor="created_at">Date</label>

      <input
        onChange={(e) => handle(e)}
        type="radio"
        id="votes"
        name="sortGroup"
        value="votes"
      />
      <label htmlFor="votes">Votes</label>
    </div>
  );
};

export default SortBy;
