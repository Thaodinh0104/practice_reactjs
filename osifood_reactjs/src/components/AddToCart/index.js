import React from "react";
import { CartItem } from "./CartItem";
const cartList = [
  {
    _id: "637ef422b28413483f4dceac",
    title: "Cá hú tươi 500g",
    img: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    price: "32.8",
    quantity: 100,
    amount: 2,
  },
  {
    _id: "637ef508b28413483f4dceae",
    title: "Ba rọi heo rút sườn - Nam Phong 100g",
    img: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    price: "27.8",
    quantity: 100,
    amount: 1,
  },
];
export const Cart = () => {
  return (
    <div className="sitenav-content sitenav-cart mini-cart">
      <div className="sitenav-content__title">
        <p className="txt-title">Giỏ hàng</p>
      </div>

      <div className="sitenav-content__block cart-view">
        <div className="cart-view-scroll sitenav-boxscroll">
          <div className="cart-view-render">
            {cartList.map((item) => {
              return <CartItem data={item} />;
            })}
          </div>
        </div>
        <div className="cart-view-line"></div>
        <div className="cart-view-total">
          <div className="mini-cart">
            <div className="mini-cart__total">
              <div className="mnc-total mnc-total-text">TỔNG TIỀN:</div>
              <div className="mnc-total mnc-total-price" id="total-view-cart">
                67,800₫
              </div>
            </div>

            <div className="mini-cart__button">
              <div className="mnc-cta">
                <a href="/cart" className="linktocart button btnred">
                  Xem giỏ hàng
                </a>
              </div>
              <div className="mnc-cta">
                <a href="/checkout" className="linktocheckout button btnred">
                  Thanh toán
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
