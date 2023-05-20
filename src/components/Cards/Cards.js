import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Cards({
  productName,
  productPrice,
  productImage,
  onPress,
}) {
  return (
    <Card sx={{ maxWidth: 450 }}>
      <CardMedia sx={{ height: 250 }} image={productImage} title="" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {productName}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {productPrice}$
        </Typography>
        <CardActions>
          <Button onClick={onPress} size="small">
            ADD TO CART
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}
