import React, { useState } from "react";
import { Login } from "../Account/Login";

export const HeaderAccount = () => {
  const [openPopup, setOpenPopup] = useState(false);

  return (
    <div className="header-action-item header-action_account">
      <div className="header-action_text">
        <div
          className="header-action__link"
          onClick={() => {
            setOpenPopup(!openPopup);
          }}
        >
          <span className="box-icon">
            <svg className="svg-ico-account" viewBox="0 0 1024 1024">
              <path
                className="path1"
                d="M486.4 563.2c-155.275 0-281.6-126.325-281.6-281.6s126.325-281.6 281.6-281.6 281.6 126.325 281.6 281.6-126.325 281.6-281.6 281.6zM486.4 51.2c-127.043 0-230.4 103.357-230.4 230.4s103.357 230.4 230.4 230.4c127.042 0 230.4-103.357 230.4-230.4s-103.358-230.4-230.4-230.4z"
              ></path>
              <path
                className="path2"
                d="M896 1024h-819.2c-42.347 0-76.8-34.451-76.8-76.8 0-3.485 0.712-86.285 62.72-168.96 36.094-48.126 85.514-86.36 146.883-113.634 74.957-33.314 168.085-50.206 276.797-50.206 108.71 0 201.838 16.893 276.797 50.206 61.37 27.275 110.789 65.507 146.883 113.634 62.008 82.675 62.72 165.475 62.72 168.96 0 42.349-34.451 76.8-76.8 76.8zM486.4 665.6c-178.52 0-310.267 48.789-381 141.093-53.011 69.174-54.195 139.904-54.2 140.61 0 14.013 11.485 25.498 25.6 25.498h819.2c14.115 0 25.6-11.485 25.6-25.6-0.006-0.603-1.189-71.333-54.198-140.507-70.734-92.304-202.483-141.093-381.002-141.093z"
              ></path>
            </svg>
            <span className="box-icon--close">
              <svg viewBox="0 0 19 19" role="presentation">
                <path
                  d="M9.1923882 8.39339828l7.7781745-7.7781746 1.4142136 1.41421357-7.7781746 7.77817459 7.7781746 7.77817456L16.9705627 19l-7.7781745-7.7781746L1.41421356 19 0 17.5857864l7.7781746-7.77817456L0 2.02943725 1.41421356.61522369 9.1923882 8.39339828z"
                  fillRule="evenodd"
                ></path>
              </svg>
            </span>
          </span>
          <span className="box-text">
            <span className="txtbl">
              Tài khoản
              <br />
            </span>
          </span>
        </div>
        <span
          className="box-triangle"
          style={{ opacity: openPopup ? "1" : "0" }}
        >
          <svg viewBox="0 0 20 9" role="presentation">
            <path
              d="M.47108938 9c.2694725-.26871321.57077721-.56867841.90388257-.89986354C3.12384116 6.36134886 5.74788116 3.76338565 9.2467995.30653888c.4145057-.4095171 1.0844277-.40860098 1.4977971.00205122L19.4935156 9H.47108938z"
              fill="#ffffff"
            ></path>
          </svg>
        </span>
        <div className={`dropdown-menu ${openPopup ? "active" : ""} `}>
          <div className="dropdown-menu-inner">
            <Login />
          </div>
        </div>
      </div>
    </div>
  );
};
