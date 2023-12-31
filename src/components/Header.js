import React from "react";

export const Heading = () => {
  const [logBtn, setLogBtn] = React.useState("Login");
  return (
    <div className="Header-component">
      <div className="logo-container">
        <img
          className="logo"
          src="https://img.freepik.com/premium-vector/online-food-app-icon-food-shop-location-logo-also-online-resturent-location-template_608547-155.jpg?w=2000"
        />
      </div>
      <div className="navigation">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <button
            className="login-button"
            onClick={() => {
              logBtn === "Logout" ? setLogBtn("Login") : setLogBtn("Logout");
            }}
          >
            {logBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};
