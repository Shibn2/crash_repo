import React, { useState } from "react";
import debouncedSearch from "./useDebounce";

function DebouncedSearch() {
  const [search, setSearch] = useState("");
  const debouncedKeyword = debouncedSearch(search, 3000);

  return (
    <div>
      <input
        placeholder="Search for the product"
        onChange={(e) => setSearch(e.target.value)}
      />
      <p>Debounced search keyword is: {debouncedKeyword}</p>
    </div>
  );
}

export default DebouncedSearch;
