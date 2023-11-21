import React from "react";
import ResCard from "./ResCard";

const resList = [
  {
    name: "Restaurant 1",
    ratings: "4",
  },
  {
    name: "Restaurant 2",
    ratings: "5",
  },
];

export const Body = () => {
  return (
    <div className="Body-component">
      <div className="search-container">search</div>
      <div className="filter-container">
        <button
          className="filter-button"
          onClick={() => {
            alert("Filter button clicked");
          }}
        >
          Filter
        </button>
      </div>

      <div className="res-container">
        <div className="res-card">
          {resList.map((res) => {
            return <ResCard resData={res} />;
          })}
        </div>
      </div>
    </div>
  );
};
