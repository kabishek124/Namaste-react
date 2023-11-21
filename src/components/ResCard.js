import React from "react";
// restaURnt card part

// list of restaurants
const ResCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card">
      <div className="res-img-container">
        <img className="res-img" src="" />
      </div>
      <div className="res-details">
        <h3>{resData.name}</h3>
        <p>{resData.ratings}.</p>
      </div>
    </div>
  );
};

export default ResCard;
