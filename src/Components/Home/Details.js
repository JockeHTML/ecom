import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Button } from "@mui/material";
import { useLocation } from "react-router";
import { EcomContext } from "../../Context/Context";

export default function Details(props) {
  const { setShoeDetails, addingProduct } = useContext(EcomContext);
  const location = useLocation();

  return (
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.title}
        subheader={`${props.price}€`}
      />
      <CardMedia
        component="img"
        height="194"
        image={props.src}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {location.pathname === "/cart" ? null : (
          <Button
            style={{ marginRight: "10px" }}
            variant="contained"
            onClick={() => setShoeDetails([])}
          >
            BACK
          </Button>
        )}
        {location.pathname === "/cart" ? (
          <Button variant="contained" color="secondary">
            Remove from cart
          </Button>
        ) : (
          <Button
            onClick={() => addingProduct(props)}
            variant="contained"
            color="secondary"
          >
            Add to cart
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
