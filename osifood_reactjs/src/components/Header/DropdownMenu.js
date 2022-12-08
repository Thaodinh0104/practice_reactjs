import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
const menuListing = [
  {
    title: "Đang khuyến mãi",
    link: "/collections/thit",
  },
  {
    title: "Thực phẩm tươi sống",
    link: "/collections/thuc-pham-tuoi-song",
    subMenu: [
      {
        title: "Thịt - trứng - hải sản",
        link: "/thit-trung-hai-san",
        subMenu: [
          {
            title: "Thịt",
            link: "/gioi-thieu",
          },
          {
            title: "Hải Sản",
            link: "/collections/hai-san",
          },
          {
            title: "Trứng",
            link: "/collections/trung",
          },
        ],
      },
      {
        title: "Rau - củ - quả",
        link: "/collections/rau-cu-qua",
        subMenu: [
          {
            title: "Rau",
            link: "/collections/rau",
          },
          {
            title: "Củ",
            link: "/collections/cu",
          },
          {
            title: "Quả",
            link: "/collections/qua",
          },
        ],
      },
      {
        title: "Trái cây",
        link: "/collections/trai-cay",
      },
      {
        title: "Thực phẩm chế biến",
        link: "/collections/thuc-pham-che-bien",
      },
    ],
  },
  {
    title: "Thực phẩm công nghệ",
    link: "/collections/thuc-pham-cong-nghe",
    subMenu: [
      {
        title: "Nước giải khát",
        link: "/collections/nuoc-giai-khát",
        subMenu: [
          {
            title: "Trà - Cafe",
            link: "/san-pham",
          },
          {
            title: "Bột giải khát",
            link: "/collections/bot-giai-khat",
          },
          {
            title: "Bia - Nước giải khát",
            link: "/collections/bia-nuoc-giai-khat",
          },
        ],
      },
    ],
  },
];
export const SubMenu = ({ menu, level, onParentShow: isOpen }) => {
  const [currentItem, setCurrentItem] = useState("");
  const [activeItem, setActiveItem] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setActiveItem(false);
    setCurrentItem(location.pathname);
  }, [location]);
  useEffect(() => {
    if (menu.link === currentItem) {
      setActiveItem(true);
    }
  }, [currentItem]);
  useEffect(() => {
    if (typeof isOpen == "function" && activeItem) {
      isOpen(true);
    }
  }, [activeItem]);

  const nextLevel = level + 1;
  return (
    <li
      className={`${
        menu.subMenu ? "has-subnav" : ""
      } navi${level}  nav-level${level} checknav ${
        activeItem ? "current-page parent-open" : ""
      }`}
    >
      <Link
        to={menu.link}
        className="link-parent"
        onClick={() => setCurrentItem(menu.link)}
      >
        {menu.title}
      </Link>
      {menu.subMenu && (
        <svg
          className="icon-nav-arrow"
          viewBox="0 0 8 12"
          role="presentation"
          onClick={() => setActiveItem(!activeItem)}
        >
          <path
            strokeWidth="2"
            d="M2 2l4 4-4 4"
            fill="none"
            strokeLinecap="square"
          ></path>
        </svg>
      )}
      {menu.subMenu && (
        <ul
          className="submenu subnav-child"
          style={{ display: activeItem ? "block" : "none" }}
        >
          {menu.subMenu.map((subItem) => {
            return (
              <SubMenu
                menu={subItem}
                key={subItem.link}
                level={nextLevel}
                onParentShow={(isShow) => setActiveItem(isShow)}
              />
            );
          })}
        </ul>
      )}
    </li>
  );
};

export const DropdownMenu = () => {
  return (
    <div className="sitenav-content sitenav-menu menu-mobile" id="siteNav-menu">
      <div className="sitenav-content__title">
        <Link
          href="/"
          className="navlogo"
          aria-label="Trang chủ"
          title="Trang chủ"
        >
          <span className="icon-home">
            <svg x="0px" y="0px" viewBox="0 0 512 512">
              {" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <path d="M506.555,208.064L263.859,30.367c-4.68-3.426-11.038-3.426-15.716,0L5.445,208.064 c-5.928,4.341-7.216,12.665-2.875,18.593s12.666,7.214,18.593,2.875L256,57.588l234.837,171.943c2.368,1.735,5.12,2.57,7.848,2.57 c4.096,0,8.138-1.885,10.744-5.445C513.771,220.729,512.483,212.405,506.555,208.064z"></path>{" "}
                </g>{" "}
              </g>{" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <path d="M442.246,232.543c-7.346,0-13.303,5.956-13.303,13.303v211.749H322.521V342.009c0-36.68-29.842-66.52-66.52-66.52 s-66.52,29.842-66.52,66.52v115.587H83.058V245.847c0-7.347-5.957-13.303-13.303-13.303s-13.303,5.956-13.303,13.303v225.053 c0,7.347,5.957,13.303,13.303,13.303h133.029c6.996,0,12.721-5.405,13.251-12.267c0.032-0.311,0.052-0.651,0.052-1.036v-128.89 c0-22.009,17.905-39.914,39.914-39.914s39.914,17.906,39.914,39.914v128.89c0,0.383,0.02,0.717,0.052,1.024 c0.524,6.867,6.251,12.279,13.251,12.279h133.029c7.347,0,13.303-5.956,13.303-13.303V245.847 C455.549,238.499,449.593,232.543,442.246,232.543z"></path>{" "}
                </g>{" "}
              </g>{" "}
            </svg>
          </span>
        </Link>
        <button className="btnclose">
          <svg viewBox="0 0 19 19" role="presentation">
            <path
              d="M9.1923882 8.39339828l7.7781745-7.7781746 1.4142136 1.41421357-7.7781746 7.77817459 7.7781746 7.77817456L16.9705627 19l-7.7781745-7.7781746L1.41421356 19 0 17.5857864l7.7781746-7.77817456L0 2.02943725 1.41421356.61522369 9.1923882 8.39339828z"
              fillRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <div className="sitenav-content__block">
        <div className="mobile-menu">
          <div className="mobile-menu__inner mplus-menu vertical-navigation">
            <ul className="mobile-menu__linklists">
              {menuListing.map((item) => {
                return <SubMenu menu={item} level={1} key={item.link} />;
              })}
            </ul>
            <div className="mobile-menu__help">
              <p className="help-title">Bạn cần hỗ trợ</p>{" "}
              <div className="help-item">
                <a
                  href="tel:0919439489"
                  className="help-item--link"
                  rel="nofollow"
                >
                  <svg viewBox="0 0 24 24" role="presentation">
                    <g
                      strokeWidth="2"
                      fill="none"
                      fillRule="evenodd"
                      strokeLinecap="square"
                    >
                      <path
                        d="M17 15l-3 3-8-8 3-3-5-5-3 3c0 9.941 8.059 18 18 18l3-3-5-5z"
                        stroke="#252a2b"
                      ></path>
                      <path
                        d="M14 1c4.971 0 9 4.029 9 9m-9-5c2.761 0 5 2.239 5 5"
                        stroke="#008848"
                      ></path>
                    </g>
                  </svg>
                  0919.439.489
                </a>
              </div>
              <div className="help-item">
                <a
                  href="mailto:osifoodos99@gmail.com"
                  className="help-item--link"
                  rel="nofollow"
                >
                  <svg viewBox="0 0 22 22" role="presentation">
                    <g fill="none" fillRule="evenodd">
                      <path
                        stroke="#252a2b"
                        d="M.916667 10.08333367l3.66666667-2.65833334v4.65849997zm20.1666667 0L17.416667 7.42500033v4.65849997z"
                      ></path>
                      <path
                        stroke="#252a2b"
                        strokeWidth="2"
                        d="M4.58333367 7.42500033L.916667 10.08333367V21.0833337h20.1666667V10.08333367L17.416667 7.42500033"
                      ></path>
                      <path
                        stroke="#252a2b"
                        strokeWidth="2"
                        d="M4.58333367 12.1000003V.916667H17.416667v11.1833333m-16.5-2.01666663L21.0833337 21.0833337m0-11.00000003L11.0000003 15.5833337"
                      ></path>
                      <path
                        d="M8.25000033 5.50000033h5.49999997M8.25000033 9.166667h5.49999997"
                        stroke="#008848"
                        strokeWidth="2"
                        strokeLinecap="square"
                      ></path>
                    </g>
                  </svg>
                  osifoodos99@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
