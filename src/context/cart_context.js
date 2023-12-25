import { createContext, useContext, useEffect, useReducer } from "react";
import reducer  from "../reducer/cartReducer";


const CartContext = createContext();



const initialState = {
    Cart: [],
    total_item: "",
    total_amount: "",
    shipping_fee: 5000,
};

const CartProvider = ({ children}) => {
    const {state, dispatch} = useReducer(reducer, initialState);

    const addToCart = (id, color, amount, product) => {
        dispatch({type:"Add_To_Cart", payload:{id, color, amount, product}});
    };

    // increment and decrement the product

  const setDecrease = (id) => {
    dispatch({ type: "SET_DECREMENT", payload: id });
  };

  const setIncrement = (id) => {
    dispatch({ type: "SET_INCREMENT", payload: id });
  };

    // remove item 

    const removeItem = (id) => {
        dispatch({type:"REMOVE_ITEM", payload: id });
    };

    // to cleare the cart 
    const clearCart = () => {
        dispatch({ type: "CLEAR_CART" });
      };

    //get vs set

 // useEffect(() => {
    // dispatch({ type: "CART_TOTAL_ITEM" });
    // dispatch({ type: "CART_TOTAL_PRICE" });
   // dispatch({ type: "CART_ITEM_PRICE_TOTAL" });

   // localStorage.setItem("thapaCart", JSON.stringify(state.cart));
 // }, [state.cart]);

    

    return ( <CartContext.Provider value={{...state, addToCart, removeItem, clearCart, setDecrease, setIncrement}}>{children}</CartContext.Provider>

    );
};

const useCartContext = () => {
    return useContext(CartContext);
}

export {CartProvider, useCartContext};