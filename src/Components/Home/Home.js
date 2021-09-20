import { Container } from "@mui/material";
import React, { useState, useContext } from "react";
import { products } from "../../data";
import Card from "./Card";
import Details from "./Details";
import { EcomContext } from "../../Context/Context";

const Home = () => {
  const { handleClick, setShoeDetails, shoeDetails } = useContext(EcomContext);
  /* const handleClick = (title) => {

    const filteredProduct = products.filter((product) => {
      return product.title.includes(title);
    });
    setShoeDetails(filteredProduct);
  };

  const [shoeDetails, setShoeDetails] = useState([]);*/

  return (
    <Container
      maxWidth="lg"
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        paddingTop: "5rem",
      }}
    >
      {shoeDetails.length > 0
        ? shoeDetails.map((value) => {
            return <Details key={value._id} {...value} />;
          })
        : products.map((product) => {
            return <Card key={product._id} {...product} />;
          })}
    </Container>
  );
};

export default Home;
