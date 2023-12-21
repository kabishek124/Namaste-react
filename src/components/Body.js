import React from "react";
import ResCard from "./ResCard";
import { useEffect } from "react/cjs/react.production.min";

export const Body = () => {
  // using state variables
  const [resList, setResList] = React.useState([]);
  // const [resList, setResList] = React.useState([
  //   {
  //     name: "Restaurant 1",
  //     ratings: "4",
  //     prize: "500",
  //   },
  //   {
  //     name: "Restaurant 2",
  //     ratings: "5",
  //   },
  //   {
  //     name: "Restaurant 3",
  //     ratings: "4.9",
  //     prize: "500",
  //   },
  //   {
  //     name: "Restaurant 4",
  //     ratings: "4",
  //     prize: "50",
  //   },
  //   {
  //     name: "Restaurant 5",
  //     ratings: "2.9",
  //     prize: "50",
  //   },
  // ]);

  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const url = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9063743909563&lng=80.22645876204942&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    //console.log(url);
    const json = await url.json();
    console.log(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setResList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  // Conditional rendering
  return (
    <div className="Body-component">
      <div className="search-container">search</div>
      <div className="filter-container">
        <button
          className="filter-button"
          onClick={() => {
            setResList(resList.filter((res) => res.info.avgRating >= 4));
          }}
        >
          Filter
        </button>
      </div>

      <div className="res-container">
        <div className="res-card">
          {resList && resList.length > 0 ? (
            resList.map((res) => <ResCard key={res.info.id} resData={res} />)
          ) : (
            <p>No restaurants found.</p>
          )}
        </div>
      </div>
    </div>
  );
};
