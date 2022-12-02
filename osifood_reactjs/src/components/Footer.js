import React from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

export const Footer = () => {
  return (
    <footer className="mainFooter   ">
      <div className="footer-container">
        <div className="footer-call-center">
          <div className="container">
            <div className="flexbox-callcenter">
              <div className="infocc">
                <div className="infocc-box">
                  <span className="txtcc txt-init">Hotline CSKH</span>
                  <span className="txtcc txt-bold">
                    <i className="fa fa-phone-square" aria-hidden="true"></i>{" "}
                    <a href="tel:0865786557">0865786557</a>
                  </span>{" "}
                </div>
              </div>
              <div className="infocc expand-title">
                <div className="infocc-box">
                  <span className="txtcc txt-init">
                    Xem thêm <br /> thông tin
                  </span>
                  <span className="txtcc txt-icon">
                    <i className="fa fa-angle-down" aria-hidden="true"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-expand-collapsed">
          <div className="footer-maininfo">
            <div className="container">
              <Row className="justify-content-center">
                <Col md={6} sm={12} xs={12} className="widget-footer">
                  <h4 className="title-footer">Về OsiFood</h4>
                  <div className="content-footer block-collapse row">
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <p>
                        Công ty TNHH Sản Xuất Thương Mại Dịch Vụ Nhật Minh
                        Bakery{" "}
                      </p>
                      Mã số doanh nghiệp: 0313983358 Đăng ký lần đầu ngày 26
                      tháng 08 năm 2016, đăng ký thay đổi lần thứ 4, ngày 20
                      tháng 01 năm 2021<p></p>
                      <div className="address-footer">
                        <ul>
                          <li className="contact-1">
                            <b>Địa chỉ:</b> 288 Phan Văn Trị, Phường 11, Quận
                            Bình Thạnh, Tp. Hồ Chí Minh.
                          </li>
                          <li className="contact-2">
                            <b>Điện thoại:</b> 0865786557
                          </li>
                          <li className="contact-4">
                            <b>Email:</b> osifoodos99@gmail.com
                          </li>{" "}
                        </ul>
                      </div>
                      <div className="logo-footer hidden-xs">
                        <a
                          href="http://online.gov.vn/Home/WebDetails/93190"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            className=" ls-is-cached lazyloaded"
                            data-src="//theme.hstatic.net/200000459373/1000812576/14/footer_logobct_img.png?v=282"
                            src="//theme.hstatic.net/200000459373/1000812576/14/footer_logobct_img.png?v=282"
                            alt="Bộ Công Thương"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <div className="footer-map"></div>

                      <div className="logo-footer visible-xs">
                        <a
                          href="http://online.gov.vn/Home/WebDetails/93190"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            className="lazyload"
                            data-src="//theme.hstatic.net/200000459373/1000812576/14/footer_logobct_img.png?v=282"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                            alt="Bộ Công Thương"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </Col>

                <Col md={3} sm={12} xs={12} className="widget-footer">
                  <h4 className="title-footer">Điều khoản và Chính sách</h4>
                  <div className="content-footer block-collapse">
                    <ul className="footerNav-link">
                      <li className="item">
                        <a
                          href="/pages/dieu-khoan-bao-mat"
                          title="Điều khoản dịch vụ"
                        >
                          Điều khoản dịch vụ
                        </a>
                      </li>

                      <li className="item">
                        <a
                          href="/pages/chinh-sach-bao-mat"
                          title="Chính sách bảo mật"
                        >
                          Chính sách bảo mật
                        </a>
                      </li>

                      <li className="item">
                        <a
                          href="/pages/chinh-sach-giao-hang"
                          title="Chính sách giao hàng"
                        >
                          Chính sách giao hàng
                        </a>
                      </li>

                      <li className="item">
                        <a
                          href="/pages/huong-dan-mua-hang-va-thanh-toan"
                          title="Hướng dẫn mua hàng và Thanh toán"
                        >
                          Hướng dẫn mua hàng và Thanh toán
                        </a>
                      </li>

                      <li className="item">
                        <a
                          href="/pages/chinh-sach-doi-tra-va-hoan-tien"
                          title="Chính sách kiểm hàng, đổi trả và hoàn tiền"
                        >
                          Chính sách kiểm hàng, đổi trả và hoàn tiền
                        </a>
                      </li>

                      <li className="item">
                        <a
                          href="/pages/phan-anh-chat-luong-hang-hoa-dich-vu"
                          title="Phản ánh chất lượng hàng hóa &amp; dịch vụ"
                        >
                          Phản ánh chất lượng hàng hóa &amp; dịch vụ
                        </a>
                      </li>
                    </ul>
                  </div>
                </Col>

                <Col md={3} sm={12} xs={12} className="widget-footer">
                  <h4 className="title-footer">Theo dõi OsiFood</h4>

                  <div className="content-footer block-collapse">
                    <div className="fanpage-facebook">
                      <div
                        className="fb-page fb_iframe_widget"
                        data-href="https://www.facebook.com/thucphamosifood"
                        data-tabs="timeline"
                        data-width=""
                        data-height="250"
                        data-small-header="false"
                        data-adapt-container-width="true"
                        data-hide-cover="false"
                        data-show-facepile="true"
                        fb-xfbml-state="rendered"
                        fb-iframe-plugin-query="adapt_container_width=true&amp;app_id=363772567412181&amp;container_width=263&amp;height=250&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2Fthucphamosifood&amp;locale=vi_VN&amp;sdk=joey&amp;show_facepile=true&amp;small_header=false&amp;tabs=timeline&amp;width="
                      >
                        <span>
                          <iframe
                            name="f31bf9bda2ccd14"
                            width="1000px"
                            height="250px"
                            data-testid="fb:page Facebook Social Plugin"
                            title="fb:page Facebook Social Plugin"
                            frameborder="0"
                            allowtransparency="true"
                            allowfullscreen="true"
                            scrolling="no"
                            allow="encrypted-media"
                            src="https://www.facebook.com/v12.0/plugins/page.php?adapt_container_width=true&amp;app_id=363772567412181&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df314a21359c261c%26domain%3Dosifood.vn%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fosifood.vn%252Ff31ca43e7f0cb74%26relation%3Dparent.parent&amp;container_width=263&amp;height=250&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2Fthucphamosifood&amp;locale=vi_VN&amp;sdk=joey&amp;show_facepile=true&amp;small_header=false&amp;tabs=timeline&amp;width="
                            className=""
                          ></iframe>
                        </span>
                      </div>
                    </div>

                    <ul className="footerNav-social"></ul>
                  </div>
                </Col>

                <Col md={3} sm={12} xs={12} className="widget-footer">
                  <h4 className="title-footer">Chăm sóc khách hàng</h4>
                  <div className="content-footer block-collapse">
                    <div className="footerInfo-hline">
                      <div className="box-icon">
                        <svg x="0px" y="0px" viewBox="0 0 473.806 473.806">
                          {" "}
                          <g>
                            {" "}
                            <g>
                              {" "}
                              <path d="M374.456,293.506c-9.7-10.1-21.4-15.5-33.8-15.5c-12.3,0-24.1,5.3-34.2,15.4l-31.6,31.5c-2.6-1.4-5.2-2.7-7.7-4 c-3.6-1.8-7-3.5-9.9-5.3c-29.6-18.8-56.5-43.3-82.3-75c-12.5-15.8-20.9-29.1-27-42.6c8.2-7.5,15.8-15.3,23.2-22.8 c2.8-2.8,5.6-5.7,8.4-8.5c21-21,21-48.2,0-69.2l-27.3-27.3c-3.1-3.1-6.3-6.3-9.3-9.5c-6-6.2-12.3-12.6-18.8-18.6 c-9.7-9.6-21.3-14.7-33.5-14.7s-24,5.1-34,14.7c-0.1,0.1-0.1,0.1-0.2,0.2l-34,34.3c-12.8,12.8-20.1,28.4-21.7,46.5 c-2.4,29.2,6.2,56.4,12.8,74.2c16.2,43.7,40.4,84.2,76.5,127.6c43.8,52.3,96.5,93.6,156.7,122.7c23,10.9,53.7,23.8,88,26 c2.1,0.1,4.3,0.2,6.3,0.2c23.1,0,42.5-8.3,57.7-24.8c0.1-0.2,0.3-0.3,0.4-0.5c5.2-6.3,11.2-12,17.5-18.1c4.3-4.1,8.7-8.4,13-12.9 c9.9-10.3,15.1-22.3,15.1-34.6c0-12.4-5.3-24.3-15.4-34.3L374.456,293.506z M410.256,398.806 C410.156,398.806,410.156,398.906,410.256,398.806c-3.9,4.2-7.9,8-12.2,12.2c-6.5,6.2-13.1,12.7-19.3,20 c-10.1,10.8-22,15.9-37.6,15.9c-1.5,0-3.1,0-4.6-0.1c-29.7-1.9-57.3-13.5-78-23.4c-56.6-27.4-106.3-66.3-147.6-115.6 c-34.1-41.1-56.9-79.1-72-119.9c-9.3-24.9-12.7-44.3-11.2-62.6c1-11.7,5.5-21.4,13.8-29.7l34.1-34.1c4.9-4.6,10.1-7.1,15.2-7.1 c6.3,0,11.4,3.8,14.6,7c0.1,0.1,0.2,0.2,0.3,0.3c6.1,5.7,11.9,11.6,18,17.9c3.1,3.2,6.3,6.4,9.5,9.7l27.3,27.3 c10.6,10.6,10.6,20.4,0,31c-2.9,2.9-5.7,5.8-8.6,8.6c-8.4,8.6-16.4,16.6-25.1,24.4c-0.2,0.2-0.4,0.3-0.5,0.5 c-8.6,8.6-7,17-5.2,22.7c0.1,0.3,0.2,0.6,0.3,0.9c7.1,17.2,17.1,33.4,32.3,52.7l0.1,0.1c27.6,34,56.7,60.5,88.8,80.8 c4.1,2.6,8.3,4.7,12.3,6.7c3.6,1.8,7,3.5,9.9,5.3c0.4,0.2,0.8,0.5,1.2,0.7c3.4,1.7,6.6,2.5,9.9,2.5c8.3,0,13.5-5.2,15.2-6.9 l34.2-34.2c3.4-3.4,8.8-7.5,15.1-7.5c6.2,0,11.3,3.9,14.4,7.3c0.1,0.1,0.1,0.1,0.2,0.2l55.1,55.1 C420.456,377.706,420.456,388.206,410.256,398.806z"></path>{" "}
                              <path d="M256.056,112.706c26.2,4.4,50,16.8,69,35.8s31.3,42.8,35.8,69c1.1,6.6,6.8,11.2,13.3,11.2c0.8,0,1.5-0.1,2.3-0.2 c7.4-1.2,12.3-8.2,11.1-15.6c-5.4-31.7-20.4-60.6-43.3-83.5s-51.8-37.9-83.5-43.3c-7.4-1.2-14.3,3.7-15.6,11 S248.656,111.506,256.056,112.706z"></path>{" "}
                              <path d="M473.256,209.006c-8.9-52.2-33.5-99.7-71.3-137.5s-85.3-62.4-137.5-71.3c-7.3-1.3-14.2,3.7-15.5,11 c-1.2,7.4,3.7,14.3,11.1,15.6c46.6,7.9,89.1,30,122.9,63.7c33.8,33.8,55.8,76.3,63.7,122.9c1.1,6.6,6.8,11.2,13.3,11.2 c0.8,0,1.5-0.1,2.3-0.2C469.556,223.306,474.556,216.306,473.256,209.006z"></path>{" "}
                            </g>{" "}
                          </g>{" "}
                        </svg>
                      </div>
                      <div className="box-content">
                        <span>0865786557</span>
                        <u>osifoodos99@gmail.com</u>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          <div className="footer-copyright text-center">
            <div className="container">
              <p>
                Copyright © 2022 <a href="https://osifood.vn"> OsiFood</a>.
                <a
                  target="_blank"
                  href="https://www.haravan.com"
                  rel="noreferrer"
                >
                  Powered by Haravan
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
