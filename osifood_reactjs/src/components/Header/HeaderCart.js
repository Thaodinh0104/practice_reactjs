import React, { useState, useEffect, useContext } from "react";
import { Cart } from "../AddToCart";
import { OverlayActive } from "../../context/AppContextProvider";
export const HeaderCart = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const { overlayShow, handleOverlayShow } = useContext(OverlayActive);
  useEffect(() => {
    openPopup && handleOverlayShow(true);
  }, [openPopup]);
  useEffect(() => {
    !overlayShow && setOpenPopup(false);
  }, [overlayShow]);
  return (
    <div className="header-action-item header-action_cart">
      <div className="header-action_text">
        <div
          className="header-action__link "
          onClick={() => {
            setOpenPopup(!openPopup);
          }}
        >
          <span className="box-icon">
            <svg
              className="svg-ico-cart"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -13 456.75885 456"
              width="456pt"
            >
              <path d="m150.355469 322.332031c-30.046875 0-54.402344 24.355469-54.402344 54.402344 0 30.042969 24.355469 54.398437 54.402344 54.398437 30.042969 0 54.398437-24.355468 54.398437-54.398437-.03125-30.03125-24.367187-54.371094-54.398437-54.402344zm0 88.800781c-19 0-34.402344-15.402343-34.402344-34.398437 0-19 15.402344-34.402344 34.402344-34.402344 18.996093 0 34.398437 15.402344 34.398437 34.402344 0 18.996094-15.402344 34.398437-34.398437 34.398437zm0 0"></path>
              <path d="m446.855469 94.035156h-353.101563l-7.199218-40.300781c-4.4375-24.808594-23.882813-44.214844-48.699219-48.601563l-26.101563-4.597656c-5.441406-.96875-10.632812 2.660156-11.601562 8.097656-.964844 5.441407 2.660156 10.632813 8.101562 11.601563l26.199219 4.597656c16.53125 2.929688 29.472656 15.871094 32.402344 32.402344l35.398437 199.699219c4.179688 23.894531 24.941406 41.324218 49.199219 41.300781h210c22.0625.066406 41.546875-14.375 47.902344-35.5l47-155.800781c.871093-3.039063.320312-6.3125-1.5-8.898438-1.902344-2.503906-4.859375-3.980468-8-4zm-56.601563 162.796875c-3.773437 12.6875-15.464844 21.367188-28.699218 21.300781h-210c-14.566407.039063-27.035157-10.441406-29.5-24.800781l-24.699219-139.398437h336.097656zm0 0"></path>
              <path d="m360.355469 322.332031c-30.046875 0-54.402344 24.355469-54.402344 54.402344 0 30.042969 24.355469 54.398437 54.402344 54.398437 30.042969 0 54.398437-24.355468 54.398437-54.398437-.03125-30.03125-24.367187-54.371094-54.398437-54.402344zm0 88.800781c-19 0-34.402344-15.402343-34.402344-34.398437 0-19 15.402344-34.402344 34.402344-34.402344 18.996093 0 34.398437 15.402344 34.398437 34.402344 0 18.996094-15.402344 34.398437-34.398437 34.398437zm0 0"></path>
            </svg>
            <span className="box-icon--close">
              <svg viewBox="0 0 19 19" role="presentation">
                <path
                  d="M9.1923882 8.39339828l7.7781745-7.7781746 1.4142136 1.41421357-7.7781746 7.77817459 7.7781746 7.77817456L16.9705627 19l-7.7781745-7.7781746L1.41421356 19 0 17.5857864l7.7781746-7.77817456L0 2.02943725 1.41421356.61522369 9.1923882 8.39339828z"
                  fillRule="evenodd"
                ></path>
              </svg>
            </span>
            <span className="count-holder">
              <span className="count">0</span>
            </span>
          </span>
          <span className="box-text">
            <span className="txtbl">Giỏ hàng</span>
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
            <Cart />
          </div>
        </div>
      </div>
    </div>
  );
};
