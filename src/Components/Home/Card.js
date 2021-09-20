import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { EcomContext } from "../../Context/Context";

export default function MediaCard(props) {
  const { handleClick, setClicked, addingProduct } = useContext(EcomContext);

  const handleAddToCart = () => {
    addingProduct(props);
    setClicked(true);
  };

  return (
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      <CardMedia
        component="img"
        height="140"
        image={props.src}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" onClick={() => handleClick(props.title)}>
          Learn More
        </Button>
        <Button onClick={handleAddToCart} variant="contained" color="secondary">
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}
