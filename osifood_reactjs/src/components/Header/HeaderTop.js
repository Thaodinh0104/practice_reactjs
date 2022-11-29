import React from "react";
import { HeaderCart } from "./HeaderCart";
import { HeaderAccount } from "./HeaderAccount";
export const HeaderTop = () => {
  return (
    <div className="header-top">
      <div className="container">
        <div className="container-header">
          <div className="menu-header">
            <div className="hamburger-menu-header">
              <span className="box-icon">
                <span className="hamburger-menu" aria-hidden="true">
                  <span className="bar"></span>
                </span>
                <span className="box-icon--close">
                  <svg viewBox="0 0 19 19" role="presentation">
                    <path
                      d="M9.1923882 8.39339828l7.7781745-7.7781746 1.4142136 1.41421357-7.7781746 7.77817459 7.7781746 7.77817456L16.9705627 19l-7.7781745-7.7781746L1.41421356 19 0 17.5857864l7.7781746-7.77817456L0 2.02943725 1.41421356.61522369 9.1923882 8.39339828z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </span>
              </span>
              <span className="box-text">MENU</span>
            </div>
          </div>
          <div className="header-wrap-logo logo-gradient">
            <div className="wrap-logo">
              <a href="/">
                <img
                  src="/images/logo.png"
                  alt="OsiFood"
                  className="img-responsive logoimg "
                />
              </a>
            </div>
          </div>
          <div className="header-wrap-search search-gradient">
            <div className="header-search">
              <div className="search-box wpo-wrapper-search">
                <form className="searchform-product searchform-categoris ultimate-search">
                  <div className="wpo-search-inner">
                    <input type="hidden" name="type" value="product" />
                    <input
                      required=""
                      id="inputSearchAuto-3"
                      className="input-search"
                      name="q"
                      type="text"
                      size="20"
                      placeholder="Tìm kiếm sản phẩm..."
                    />
                  </div>
                  <button type="submit" className="btn-search btn">
                    <svg
                      className="svg search"
                      height="30px"
                      width="30px"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.39zM11 18a7 7 0 1 1 7-7 7 7 0 0 1-7 7z"></path>
                    </svg>
                  </button>
                </form>
                <div
                  id="ajaxSearchResults-3"
                  className="smart-search-wrapper ajaxSearchResults"
                >
                  <div className="resultsContent"></div>
                  <div className="search-suggest">
                    <p>Gợi ý cho bạn:</p>
                    <ul></ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header-wrap-action action-gradient">
            <div className="header-action">
              <div className="header-action-item header-action_locale locationContainer">
                <div className="header-action_text ">
                  <div className="header-action__link">
                    <span className="box-text ">
                      <span className="txtnw">
                        Giao hoặc đến lấy tại{" "}
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                      </span>
                      <span className="txtbl shiptoHere">
                        <span className="txt-overflow">
                          288 Phan Văn Trị, Phường 11, Quận Bình Thạnh
                        </span>
                      </span>
                    </span>

                    <span className="box-triangle">
                      <svg viewBox="0 0 20 9" role="presentation">
                        <path
                          d="M.47108938 9c.2694725-.26871321.57077721-.56867841.90388257-.89986354C3.12384116 6.36134886 5.74788116 3.76338565 9.2467995.30653888c.4145057-.4095171 1.0844277-.40860098 1.4977971.00205122L19.4935156 9H.47108938z"
                          fill="#ffffff"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>

              <HeaderAccount />
              <HeaderCart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
