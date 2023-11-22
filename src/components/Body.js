import React from "react";
import ResCard from "./ResCard";

export const Body = () => {
  // using state variables
  const [resList, setResList] = React.useState([
    {
      name: "Restaurant 1",
      ratings: "4",
      prize: "500",
    },
    {
      name: "Restaurant 2",
      ratings: "5",
    },
    {
      name: "Restaurant 3",
      ratings: "4.9",
      prize: "500",
    },
    {
      name: "Restaurant 4",
      ratings: "4",
      prize: "50",
    },
    {
      name: "Restaurant 5",
      ratings: "2.9",
      prize: "50",
    },
  ]);
  return (
    <div className="Body-component">
      <div className="search-container">search</div>
      <div className="filter-container">
        <button
          className="filter-button"
          onClick={() => {
            setResList(resList.filter((res) => res.ratings >= 4));
          }}
        >
          Filter
        </button>
      </div>

      <div className="res-container">
        <div className="res-card">
          {resList.map((res) => {
            return <ResCard key={res.id} resData={res} />;
          })}
        </div>
      </div>
    </div>
  );
};
