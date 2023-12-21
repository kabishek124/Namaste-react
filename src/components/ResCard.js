import React from "react";
// restaURnt card part

// list of restaurants
const ResCard = (props) => {
  const { resData } = props;
  const { name, isOpen, areaName } = resData?.info;
  return (
    <div className="res-card">
      <div className="res-img-container">
        <img className="res-img" src="" />
      </div>
      <div className="res-details">
        <h3>{name}</h3>
        <p>{isOpen}</p>
        <p>{areaName}</p>
        {/* <p>{resData.ratings}.</p>
        <p>{resData.img}</p> */}
      </div>
    </div>
  );
};

export default ResCard;
