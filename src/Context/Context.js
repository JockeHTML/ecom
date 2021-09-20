import React, { createContext, useState } from "react";
import { products } from "../data";

export const EcomContext = createContext();

export const ContextProvider = (props) => {
  const [addToCart, setAddToCart] = useState([]);

  const addingProduct = (props) => {
    setAddToCart([...addToCart, props]);
    console.log(addToCart);
  };
  const [clicked, setClicked] = useState(false);
  const [shoeDetails, setShoeDetails] = useState([]);

  const handleClick = (title) => {
    const filteredProduct = products.filter((product) => {
      return product.title.includes(title);
    });
    setShoeDetails(filteredProduct);
  };

  return (
    <EcomContext.Provider
      value={{
        setShoeDetails,
        shoeDetails,
        handleClick,
        clicked,
        setClicked,
        addingProduct,
        addToCart,
        setAddToCart,
      }}
    >
      {props.children}
    </EcomContext.Provider>
  );
};
