import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  ADD_CART,
  INCREASE_QUANTITY,
  DELETE_CART,
  DECREASE_QUANTITY,
  selectCart,
} from "../../redux/reducer";
export const CartItem = ({ data }) => {
  const [amount, setAmount] = useState(data.amount);
  const dispatch = useDispatch();
  const Carts = useSelector(selectCart);

  // May be call for search result
  const incrementNumber = (id) => {
    Carts.map((cart, key) => {
      if (cart._id === id) {
        dispatch(INCREASE_QUANTITY(key));
      }
    });
  };
  const deIncrementNumber = (id) => {
    Carts.map((cart, key) => {
      if (cart._id === id) {
        dispatch(DECREASE_QUANTITY(key));
      }
    });
  };
  const deleteCartItem = (id) => {
    Carts.map((cart, key) => {
      if (cart._id === id) {
        dispatch(DELETE_CART(key));
        setAmount(0);
      }
    });
  };
  const AddToCart = (item) => {
    dispatch(ADD_CART(item));
  };
  useEffect(() => {
    console.log(Carts);
    Carts.length === 0 && setAmount(0);
    let isItem = Carts.find((cart, key) => {
      if (cart._id === data._id) {
        return cart;
      }
    });
    console.log("isItem", isItem);
    if (isItem) {
      setAmount(isItem.amount);
    }
  }, [Carts, dispatch]);
  return (
    <div className="mini-cart__item">
      <div className="mini-cart__left">
        <a className="mnc-link" href="/products/ca-hu-tuoi-song-bv-500g">
          <img src="/images/products/product-1.jpg" alt={data.title} />
        </a>
      </div>
      <div className="mini-cart__right">
        <p className="mini-cart__title">
          <a
            className="mnc-title mnc-link"
            href="/products/ca-hu-tuoi-song-bv-500g"
            title={data.title}
          >
            {data.title}
          </a>
          <span className="mnc-variant"></span>
        </p>

        <div className="mini-cart__quantity">
          <div className="quantity-selector">
            <button
              className="qty-btn mnc-minus"
              onClick={() => deIncrementNumber(data._id)}
            >
              <svg width="20" height="20" viewBox="0 0 20 20">
                <rect height="1" width="18" y="9" x="1"></rect>
              </svg>
            </button>
            <input
              className="qty-value  "
              type="text"
              readonly=""
              name="mnc-quantity"
              value={amount}
            />
            <button
              className="qty-btn mnc-plus"
              onClick={() => incrementNumber(data._id)}
            >
              <svg width="20" height="20" viewBox="0 0 20 20">
                <rect x="9" y="1" width="1" height="17"></rect>
                <rect x="1" y="9" width="17" height="1"></rect>
              </svg>
            </button>
          </div>
          <div className="mini-cart__price">
            <span className="mnc-price">{data.price}₫</span>
          </div>
        </div>
        <div
          className="mini-cart__remove"
          onClick={() => deleteCartItem(data._id)}
        >
          <a>
            <svg x="0px" y="0px" viewBox="0 0 1000 1000">
              <g>
                <path d="M500,442.7L79.3,22.6C63.4,6.7,37.7,6.7,21.9,22.5C6.1,38.3,6.1,64,22,79.9L442.6,500L22,920.1C6,936,6.1,961.6,21.9,977.5c15.8,15.8,41.6,15.8,57.4-0.1L500,557.3l420.7,420.1c16,15.9,41.6,15.9,57.4,0.1c15.8-15.8,15.8-41.5-0.1-57.4L557.4,500L978,79.9c16-15.9,15.9-41.5,0.1-57.4c-15.8-15.8-41.6-15.8-57.4,0.1L500,442.7L500,442.7z"></path>
              </g>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
