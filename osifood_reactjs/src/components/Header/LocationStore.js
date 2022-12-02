import React, { useState } from "react";
const locations = [
  {
    id: "1233389",
    district: "Quận Bình Thạnh",
    province: "Hồ Chí Minh",
    address: "OsiFood Bình Hòa",
    fullAddress: "288 Phan Văn Trị, Phường 11, Quận Bình Thạnh",
  },
  {
    id: "1239543",
    district: "Quận 4",
    province: "Hồ Chí Minh",
    address: "OsiFood Nguyễn Khoái",
    fullAddress: "84 - 86 Nguyễn Khoái, Phường 02, Quận 4",
  },
  {
    id: "1239545",
    district: "Thành phố Thủ Đức",
    province: "Hồ Chí Minh",
    address: "OsiFood Sky9",
    fullAddress:
      "S010-011 block CT1, chung cư Sky 09, đường số 1, Khu phố 2, Phường Phú Hữu, Thành phố Thủ Đức",
  },
  {
    id: "1291979",
    district: "Quận 11",
    province: "Hồ Chí Minh",
    address: "OsiFood Ba Tháng Hai",
    fullAddress:
      "1380-1382-1384 Đường 3/2 Phường 02 Quận 11, Phường 02, Quận 11",
  },
  {
    id: "1233389",
    district: "Quận Bình Thạnh",
    province: "Hồ Chí Minh",
    address: "OsiFood Bình Hòa",
    fullAddress: "288 Phan Văn Trị, Phường 11, Quận Bình Thạnh",
  },
];
export const LocationStore = () => {
  const [openLocation, setOpenLocation] = useState(false);
  const [activeLocation, setActiveLocation] = useState({
    id: "1233389",
    district: "Quận Bình Thạnh",
    province: "Hồ Chí Minh",
    address: "OsiFood Bình Hòa",
    fullAddress: "288 Phan Văn Trị, Phường 11, Quận Bình Thạnh",
  });
  return (
    <div className="header-action-item header-action_locale location-store locationContainer">
      <div className="header-action_text ">
        <div className="header-action__link">
          <span
            className="box-text "
            onClick={() => setOpenLocation(!openLocation)}
          >
            <span className="txtnw">
              Giao hoặc đến lấy tại{" "}
              <i className="fa fa-angle-down" aria-hidden="true"></i>
            </span>
            <span className="txtbl shiptoHere">
              <span className="txt-overflow">{activeLocation.fullAddress}</span>
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
        <div className={`dropdown-menu ${openLocation ? "active" : ""} `}>
          <div className="dropdown-menu-inner">
            <div className="sitenav-content sitenav-locate">
              <button className="btnclose">
                <svg viewBox="0 0 19 19" role="presentation">
                  <path
                    d="M9.1923882 8.39339828l7.7781745-7.7781746 1.4142136 1.41421357-7.7781746 7.77817459 7.7781746 7.77817456L16.9705627 19l-7.7781745-7.7781746L1.41421356 19 0 17.5857864l7.7781746-7.77817456L0 2.02943725 1.41421356.61522369 9.1923882 8.39339828z"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <div className="sitenav-content__title">
                <p className="txt-title">Khu vực mua hàng</p>
              </div>
              <div className="sitenav-content__block sitenav-boxscroll">
                <div className="boxaddress chooseLocation">
                  Giao hoặc đến lấy tại:
                  <span data-id="1239543" data-province="Hồ Chí Minh">
                    OsiFood Nguyễn Khoái - 84 - 86 Nguyễn Khoái, Phường 02, Quận
                    4
                  </span>
                </div>
                <div className="boxprovince">
                  <div className="textprov">
                    Chọn cửa hàng gần bạn nhất để tối ưu chi phí giao hàng. Hoặc
                    đến lấy hàng
                  </div>
                  <ul className="listprov">
                    {locations.map((item) => {
                      return (
                        <li
                          key={item.is}
                          data-id={item.id}
                          data-district={item.district}
                          data-province={item.province}
                          onClick={() => setActiveLocation(item)}
                        >
                          <span className="icmap">
                            <svg
                              fill="#008848"
                              x="0px"
                              y="0px"
                              viewBox="0 0 512 512"
                            >
                              {" "}
                              <g>
                                {" "}
                                <g>
                                  {" "}
                                  <path d="M256,0C156.748,0,76,80.748,76,180c0,33.534,9.289,66.26,26.869,94.652l142.885,230.257 c2.737,4.411,7.559,7.091,12.745,7.091c0.04,0,0.079,0,0.119,0c5.231-0.041,10.063-2.804,12.75-7.292L410.611,272.22 C427.221,244.428,436,212.539,436,180C436,80.748,355.252,0,256,0z M384.866,256.818L258.272,468.186l-129.905-209.34 C113.734,235.214,105.8,207.95,105.8,180c0-82.71,67.49-150.2,150.2-150.2S406.1,97.29,406.1,180 C406.1,207.121,398.689,233.688,384.866,256.818z"></path>{" "}
                                </g>{" "}
                              </g>{" "}
                              <g>
                                {" "}
                                <g>
                                  {" "}
                                  <path d="M256,90c-49.626,0-90,40.374-90,90c0,49.309,39.717,90,90,90c50.903,0,90-41.233,90-90C346,130.374,305.626,90,256,90z M256,240.2c-33.257,0-60.2-27.033-60.2-60.2c0-33.084,27.116-60.2,60.2-60.2s60.1,27.116,60.1,60.2 C316.1,212.683,289.784,240.2,256,240.2z"></path>{" "}
                                </g>{" "}
                              </g>
                            </svg>
                          </span>
                          <span className="address-name">{item.address}</span>
                          <span style={{ display: "none" }}> -</span>
                          {item.fullAddress}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
