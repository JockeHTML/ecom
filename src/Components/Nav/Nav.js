import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import "./nav.css";
import { EcomContext } from "../../Context/Context";
import CloseIcon from "@mui/icons-material/Close";
import Search from "./Search";

export default function SearchAppBar() {
  const { addToCart, setClicked, clicked } = useContext(EcomContext);

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            JOAKIMS SKOR
          </Typography>

          <ul className="links">
            <Link to="/">
              <li>Home</li>
            </Link>

            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/users">
              <li>Users</li>
            </Link>
            <Link to="/cart">
              <li>Cart</li>
            </Link>
            <span>{addToCart.length}</span>
            {clicked ? (
              <div className="bubble">
                Added a shoe to cart
                <CloseIcon
                  onClick={() => setClicked(false)}
                  style={{
                    marginLeft: "10px",
                    marginTop: "5px",
                    cursor: "pointer",
                  }}
                  fontSize="xs"
                />
              </div>
            ) : null}
          </ul>
          <Search />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
