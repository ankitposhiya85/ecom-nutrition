import React, { createContext, useContext, useReducer, } from "react";
import { cartReducer } from "./Reducers";
import Product from "./product";


const Cart = createContext();

const Context = ({ children }) => {

  const [state, dispatch] = useReducer(cartReducer, {
    products: Product,
    cart: [],
  });

  return (
    <Cart.Provider value={{ state, dispatch, }}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
    
  return useContext(Cart);
};

export default Context;
