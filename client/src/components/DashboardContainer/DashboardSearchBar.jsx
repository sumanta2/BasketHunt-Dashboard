import React, { useState } from "react";
import "./Styles/DashboardSearchBar.css";
const DashboardSearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };
  return (
    <>
      <div className="body_top">
        <p className="body_p">Welcome Vishal!</p>
        <div className="search-bar">
          <div class="input-container">
            <img class="imgs" src="./search.png" alt="img" />
            <input
              type="text"
              placeholder="Search for apps"
              value={query}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardSearchBar;
