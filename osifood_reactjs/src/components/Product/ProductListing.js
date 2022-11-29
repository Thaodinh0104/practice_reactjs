import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export const ProductListing = ({ limit, title, showMoreButton }) => {
  const products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <div className="product-listing popular-products">
      <div className="container">
        <div className="product-listing__wrapper">
          <h2 className="title">{title}</h2>
          <Row className="listing">
            {products.map((item) => {
              return (
                <Col xs={2} className="product-item">
                  <div className="product-item__inner">
                    <div className="product-item__image">
                      <img
                        src="/images/products/product-1.jpg"
                        alt="product-1"
                      />
                    </div>
                    <div className="product-item__info">
                      <span className="product-item__vendor">OSIFOOD</span>
                      <h4 className="product-item__name">Cá hú tươi 500g</h4>
                      <span className="product-item__price">32,800₫</span>
                      <div className="product-item__addtocart-button">
                        <button className="add-to-cart">
                          <span className="btnico">
                            <svg x="0px" y="0px" viewBox="0 0 321.2 321.2">
                              {" "}
                              <g>
                                {" "}
                                <g>
                                  {" "}
                                  <path d="M306.4,313.2l-24-223.6c-0.4-3.6-3.6-6.4-7.2-6.4h-44.4V69.6c0-38.4-31.2-69.6-69.6-69.6c-38.4,0-69.6,31.2-69.6,69.6 v13.6H46c-3.6,0-6.8,2.8-7.2,6.4l-24,223.6c-0.4,2,0.4,4,1.6,5.6c1.2,1.6,3.2,2.4,5.2,2.4h278c2,0,4-0.8,5.2-2.4 C306,317.2,306.8,315.2,306.4,313.2z M223.6,123.6c3.6,0,6.4,2.8,6.4,6.4c0,3.6-2.8,6.4-6.4,6.4c-3.6,0-6.4-2.8-6.4-6.4 C217.2,126.4,220,123.6,223.6,123.6z M106,69.6c0-30.4,24.8-55.2,55.2-55.2c30.4,0,55.2,24.8,55.2,55.2v13.6H106V69.6z M98.8,123.6c3.6,0,6.4,2.8,6.4,6.4c0,3.6-2.8,6.4-6.4,6.4c-3.6,0-6.4-2.8-6.4-6.4C92.4,126.4,95.2,123.6,98.8,123.6z M30,306.4 L52.4,97.2h39.2v13.2c-8,2.8-13.6,10.4-13.6,19.2c0,11.2,9.2,20.4,20.4,20.4c11.2,0,20.4-9.2,20.4-20.4c0-8.8-5.6-16.4-13.6-19.2 V97.2h110.4v13.2c-8,2.8-13.6,10.4-13.6,19.2c0,11.2,9.2,20.4,20.4,20.4c11.2,0,20.4-9.2,20.4-20.4c0-8.8-5.6-16.4-13.6-19.2V97.2 H270l22.4,209.2H30z"></path>{" "}
                                </g>{" "}
                              </g>{" "}
                            </svg>
                          </span>
                          <span> Chọn mua </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
          <div className="wraplist-button text-center visible-desk  visible-mobile">
            <a
              href="/collections/hot-products"
              className="button dark btn-collection"
            >
              Xem thêm sản phẩm
              <b> Sản phẩm nổi bật </b>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};