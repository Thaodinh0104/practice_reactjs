import React, { useEffect, useState } from "react";
import { CartItem } from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
export const Cart = () => {
  const { Carts, numberCart } = useSelector((state) => state.cart);
  const [totalPrices, setTotalPrices] = useState(0);
  console.log(Carts);
  useEffect(() => {
    console.log("Cart");
    const newTotalPrice = Carts.reduce((accumulator, object) => {
      return accumulator + object.amount * object.price;
    }, 0);
    setTotalPrices(newTotalPrice);
  }, [Carts]);
  return (
    <div className="sitenav-content sitenav-cart mini-cart">
      <div className="sitenav-content__title">
        <p className="txt-title">Giỏ hàng</p>
      </div>

      <div className="sitenav-content__block cart-view">
        <div className="cart-view-scroll sitenav-boxscroll">
          <div className="cart-view-render">
            {Carts.map((item) => {
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
                {totalPrices.toFixed(3)}₫
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
