import React from "react";
import "../HeaderMain/HeaderMain.scss";

const HeaderMain = () => {
  return (
    <div className="headermain">
      <div className="headermain__main">
        <h1 className="headermain__title text-light fw-bold">
          Unlimited movies, TV<br></br> shows, and more.
        </h1>
        <p className="headermain__desc text-light fw-500">
          Watch anywhere. Cancel anytime.<br></br>
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        <div className="headermain__btn-box">
          <input
            type="text"
            className="headermain__input"
            required
            placeholder="Email address"
          />
          <button className="headermain__btn btn btn-danger">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
