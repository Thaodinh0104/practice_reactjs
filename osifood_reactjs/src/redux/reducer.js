import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numberCart: 0,
  Carts: [],
  _products: [],
};

export const CartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    GET_ALL_PRODUCT: (state, action) => {
      return {
        ...state,
        _products: action.payload,
      };
    },
    GET_NUMBER_CART: (state, action) => {
      if (state.numberCart === 0) {
        let cart = {
          id: action.payload.id,
          amount: 1,
          title: action.payload.title,
          img: action.payload.img,
          price: action.payload.price,
        };
        state.Carts.push(cart);
      } else {
        let check = false;
        state.Carts.map((item, key) => {
          if (item.id == action.payload.id) {
            state.Carts[key].amount++;
            check = true;
          }
        });
        if (!check) {
          let _cart = {
            id: action.payload.id,
            amount: 1,
            title: action.payload.title,
            img: action.payload.img,
            price: action.payload.price,
          };
          state.Carts.push(_cart);
        }
      }
      return {
        ...state,
        numberCart: state.numberCart + 1,
      };
    },
    INCREASE_QUANTITY: (state, action) => {
      state.numberCart++;
      state.Carts[action.payload].amount++;
    },
    DECREASE_QUANTITY: (state, action) => {
      let amount = state.Carts[action.payload].amount;
      if (amount > 1) {
        state.numberCart--;
        state.Carts[action.payload].amount--;
      }
    },
    DELETE_CART: (state, action) => {
      let amount_ = state.Carts[action.payload].amount;

      state.numberCart = state.numberCart - amount_;
      let Carts = state.Carts.filter((item) => {
        if (item._id !== state.Carts[action.payload]._id) {
          return item;
        }
      });
      state.Carts = Carts;
    },
    ADD_CART: (state, action) => {
      console.log(action.payload);
      let cart = {
        _id: action.payload._id,
        amount: 1,
        title: action.payload.title,
        img: action.payload.img,
        price: action.payload.price,
      };
      state.Carts.push(cart);

      state.numberCart = state.numberCart + 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  GET_ALL_PRODUCT,
  GET_NUMBER_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  DELETE_CART,
  ADD_CART,
} = CartSlice.actions;
export const selectCart = (state) => state.cart.Carts;

export default CartSlice.reducer;
