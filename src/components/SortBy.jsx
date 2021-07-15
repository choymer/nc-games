import React, { useEffect, useState } from "react";

const SortBy = () => {
  const [sorting, setSorting] = useState("");

  const handle = (e) => {
    setSorting(e.target.value);
  };

  useEffect(() => {}, []);

  console.log(sorting, "sorting");

  return (
    <div>
      <p>Sort By:</p>
      <input
        onChange={(e) => handle(e)}
        type="checkbox"
        id="created_at"
        name="sortGroup"
        value="created_at"
      />
      <label htmlFor="created_at">Date</label>

      <input
        onChange={(e) => handle(e)}
        type="checkbox"
        id="comment_count"
        name="sortGroup"
        value="comment_count"
      />
      <label htmlFor="comment_count">Popularity</label>

      <input
        onChange={(e) => handle(e)}
        type="checkbox"
        id="votes"
        name="sortGroup"
        value="votes"
      />
      <label htmlFor="votes">Votes</label>
    </div>
  );
};

export default SortBy;
