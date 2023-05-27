import React, { useContext, useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Cards.css";
import DeleteBtn from "../../pages/Products/DeleteButton";
import { AppContext } from "../../AppContext/AppCotext";

export default function Cards({
  id,
  productName,
  productPrice,
  productImage,
  currencySign,
  addToCart,
  deleteFromCart,
}) {
  const { cart } = useContext(AppContext);
  const [isAdded, setIsAdded] = useState(false);
  // console.log(cart);

  useEffect(() => {
    if (cart.find((product) => product.id === id)) {
      setIsAdded(true);
      console.log(cart);
    } else {
      setIsAdded(false);
    }
  }, [id, cart]);
  // console.log(isAdded);
  return (
    <Card sx={{ maxWidth: 450 }}>
      <CardMedia sx={{ height: 250 }} image={productImage} title="" />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          style={{ height: "55px" }}
        >
          {productName}
        </Typography>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          className="product-price"
          style={{ fontWeight: "700" }}
        >
          {productPrice}
          {currencySign}
        </Typography>
        <CardActions
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          {!isAdded ? (
            <Button
              style={{ color: "#2e5b36", fontWeight: "700" }}
              onClick={addToCart}
              size="small"
              className="btn-add"
            >
              ADD TO CART
            </Button>
          ) : (
            <DeleteBtn onDelete={deleteFromCart} />
          )}
        </CardActions>
      </CardContent>
    </Card>
  );
}
