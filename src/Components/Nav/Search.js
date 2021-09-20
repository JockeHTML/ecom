import React, { useState, useContext } from "react";
import TextField from "@mui/material/TextField";
import { products } from "../../data";
import { Link } from "@mui/material";
import { EcomContext } from "../../Context/Context";

export default function BasicTextFields() {
  const { shoeDetails, setShoeDetails } = useContext(EcomContext);

  const [title, setTitle] = useState("");
  const [filtered, setFiltered] = useState([]);

  const handleChange = (e) => {
    setTitle(e.target.value);
    const filteredData = products.filter((product) => {
      return product.title.toLowerCase().includes(title);
    });
    setFiltered(filteredData);
  };

  const handleClick = (data) => {
    setShoeDetails(() => {
      return [data];
    });
    setTitle("");
  };

  return (
    <form style={{ marginLeft: "2rem" }} type="submit">
      <TextField
        value={title}
        onChange={handleChange}
        label="Search..."
        size="small"
        id="outlined-basic"
        variant="outlined"
        color="info"
        style={{ color: "#F9F871" }}
        autoComplete="false"
      />
      {title ? (
        <div
          style={{
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            height: "auto",
            width: "225px",
            backgroundColor: "white",
            justifyContent: "center",
          }}
        >
          {filtered.length > 0
            ? filtered.map((data) => {
                return (
                  <Link
                    onClick={() => handleClick(data)}
                    sx={{ cursor: "pointer" }}
                    underline="none"
                    key={data._id}
                    style={{ color: "black" }}
                  >
                    {data.title}
                  </Link>
                );
              })
            : null}
        </div>
      ) : null}
    </form>
  );
}
