import React from "react";
import { useState } from "react";
import "../Header/Header.scss";
import netflixicon from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import HeaderMain from "../HeaderMain/HeaderMain";

const Header = ({
  login,
  setUsername,
  isAuth,
  userName,
  password,
  setPassword,
}) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      {login ? (
        <></>
      ) : (
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
              <button
                onClick={(e) => setOpenModal(!openModal(e))}
                className="btn btn-danger"
              >
                Sign In
              </button>
            </div>
          </div>
          <HeaderMain />

          <dialog className="dialog" open={openModal}>
            <h3 className="modal-title">Sign In</h3>

            <div className="inputBox">
              <input
                type="text"
                placeholder="Email address"
                className="inputBox__inputs"
                value={userName}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
              <input
                type="password"
                placeholder="password"
                className="inputBox__inputs"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <button
                className="btn inputBox__button  text-light"
                onClick={() => isAuth()}
              >
                Sign In
              </button>

              <div className="checkbox">
                <input type="checkbox" required className="checkbox_check" />
                <p className="checkbox_desc">Remember me</p>
              </div>
            </div>
          </dialog>
        </div>
      )}
    </>
  );
};

export default Header;
