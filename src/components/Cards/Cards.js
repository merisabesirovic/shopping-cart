import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Cards.css";
export default function Cards({
  productName,
  productPrice,
  productImage,
  currencySign,
  onPress,
}) {
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
        <CardActions>
          <Button
            style={{ color: "#2e5b36", fontWeight: "700" }}
            onClick={onPress}
            size="small"
            className="btn-add"
          >
            ADD TO CART
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}
