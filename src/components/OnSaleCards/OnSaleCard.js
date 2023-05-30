import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import "./OnSaleCard.css";
import DeleteBtn from "../../pages/Products/DeleteButton";
import { AppContext } from "../../AppContext/AppCotext";
import { useEffect, useState, useContext } from "react";
import LoyaltyIcon from "@mui/icons-material/Loyalty";

export default function BasicCard({
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
  useEffect(() => {
    if (cart.find((product) => product.id === id)) {
      setIsAdded(true);
    } else {
      setIsAdded(false);
    }
  }, [id, cart]);

  return (
    <Card variant="outlined" sx={{ width: 340 }}>
      <Typography
        style={{ height: "40px", width: "200px" }}
        level="h2"
        fontSize="md"
        sx={{ mb: 0.5 }}
      >
        {productName}
      </Typography>
      <Typography level="body2">April 24 to May 02, 2023</Typography>
      <IconButton
        aria-label="bookmark Bahamas Islands"
        variant="plain"
        color="neutral"
        size="sm"
        sx={{ position: "absolute", top: "0.5rem", right: "0.5rem" }}
      >
        <div className="on-sale-cart-sale">
          <div className="on-sale-card">
            SALE
            <LoyaltyIcon className="l-icon" />
          </div>
        </div>
      </IconButton>
      <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
        <img
          src={productImage}
          srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      <Box sx={{ display: "flex" }}>
        <div>
          <Typography level="body3">Total price:</Typography>
          <Typography fontSize="lg" fontWeight="lg">
            {productPrice}
            {currencySign}
          </Typography>
        </div>
        {!isAdded ? (
          <Button
            variant="solid"
            size="sm"
            color="white"
            style={{ color: "green" }}
            aria-label="Explore Bahamas Islands"
            sx={{ ml: "auto", fontWeight: 600 }}
            onClick={addToCart}
          >
            ADD TO CART
          </Button>
        ) : (
          <DeleteBtn onDelete={deleteFromCart} />
        )}
      </Box>
    </Card>
  );
}
