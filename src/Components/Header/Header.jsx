import React from "react";
import "../Header/Header.scss";
import netflixicon from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="container header__container">
        <a href="/" to="/" className="header__navlink">
          <img src={netflixicon} alt="" />
        </a>
        <div className="header__nav">
          <select className="btn btn-outline text-light border me-3">
            <option value="eng" className="bg-secondary text-light">
              English
            </option>
            <option value="uz" className="bg-secondary text-light">
              Uzbek
            </option>
            <option value="ru" className="bg-secondary text-light">
              Русский
            </option>
          </select>
          <button className="btn btn-danger">Sign In</button>
        </div>
      </div>

      <div className="header__main">
        <h1 className="header__title text-light fw-bold">
          Unlimited movies, TV<br></br> shows, and more.
        </h1>
        <p className="header__desc text-light fw-500">
          Watch anywhere. Cancel anytime.<br></br>
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        <div className="header__btn-box">
          <input
            type="text"
            className="header__input"
            required
            placeholder="Email address"
          />
          <button className="header__btn btn btn-danger">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
