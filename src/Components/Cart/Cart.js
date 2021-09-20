import { Button, Container, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { EcomContext } from "../../Context/Context";
import Details from "../Home/Details";

const Cart = () => {
  const { setAddToCart, addToCart } = useContext(EcomContext);

  return (
    <Container
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      maxWidth="medium"
    >
      <h1>Cart</h1>

      {addToCart.length > 0 ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "2rem",
            flexWrap: "wrap",
          }}
        >
          {addToCart.map((shoe) => {
            return <Details {...shoe} />;
          })}

          <Button variant="contained" onClick={() => setAddToCart([])}>
            Clear cart
          </Button>
        </div>
      ) : (
        <Typography variant="h1">Cart is empty</Typography>
      )}
    </Container>
  );
};

export default Cart;
