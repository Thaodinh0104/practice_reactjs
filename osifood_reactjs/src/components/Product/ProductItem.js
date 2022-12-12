import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import { useSelector, useDispatch } from "react-redux";
import {
  ADD_CART,
  INCREASE_QUANTITY,
  DELETE_CART,
  DECREASE_QUANTITY,
  selectCart,
} from "../../redux/reducer";
export const ProductItem = (item, key) => {
  const { data } = item;
  const [count, setCount] = useState(0);
  // const Carts = useSelector((state) => state.cart);
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
        if (cart.amount == 1) {
          dispatch(DELETE_CART(key));
          setCount(0);
        } else {
          dispatch(DECREASE_QUANTITY(key));
        }
      }
    });
  };
  const AddToCart = (item) => {
    console.log(item._id);
    dispatch(ADD_CART(item));
  };

  useEffect(() => {
    console.log(Carts);
    Carts.length === 0 && setCount(0);
    let isItem = Carts.find((cart, key) => {
      if (cart._id === data._id) {
        return cart;
      }
    });
    console.log("isItem", isItem);
    if (isItem) {
      setCount(isItem.amount);
    }
  }, [Carts, dispatch]);
  return (
    <Col xs={2} className="product-item" key={data._id}>
      <div className="product-item__inner">
        <div className="product-item__image">
          <img src="/images/products/product-1.jpg" alt="product-1" />
        </div>
        <div className="product-item__info">
          <span className="product-item__vendor">OSIFOOD</span>
          <h4 className="product-item__name">{data.title}</h4>
          <span className="product-item__price">{data.price}đ</span>
          <div className="product-item__addtocart-button">
            <button
              className={`button add-to-cart ${
                !data.quantity ? "disable" : ""
              }`}
              onClick={() => AddToCart(data)}
            >
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
              {data.quantity > 0 && <span>Chọn mua</span>}
              {data.quantity === 0 && <span>Tạm hết hàng</span>}
            </button>
            {data.quantity > 0 && (
              <div className={`action-boxqty ${count > 0 ? "active" : ""}`}>
                <div className="proloop-boxqty">
                  <button
                    type="button"
                    onClick={() => deIncrementNumber(data._id)}
                    className="btnqty proloop-minus"
                    aria-label="Minus"
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20">
                      <rect height="1" width="18" y="9" x="1"></rect>
                    </svg>
                  </button>
                  <input
                    type="text"
                    name="quantity-proloop"
                    value={count}
                    onChange={(e) => setCount(count + 1)}
                    min="1"
                    className="proloop-qtyvalue"
                  />
                  <button
                    type="button"
                    onClick={() => incrementNumber(data._id)}
                    className="btnqty proloop-plus"
                    aria-label="Plus"
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20">
                      <rect x="9" y="1" width="1" height="17"></rect>
                      <rect x="1" y="9" width="17" height="1"></rect>
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Col>
  );
};
