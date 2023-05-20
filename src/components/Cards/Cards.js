import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import products from "../../common/product.json";

export default function Cards({
  productName,
  productPrice,
  productImage,
  onClick,
}) {
  return (
    <Card sx={{ maxWidth: 450 }}>
      <CardMedia sx={{ height: 250 }} image={products[0].imageURL} title="" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {products[0].title}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {products[0].price}$
        </Typography>
        <CardActions>
          <Button size="small">ADD TO CART</Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}
