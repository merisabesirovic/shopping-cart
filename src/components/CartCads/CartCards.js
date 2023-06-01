import React, { useContext } from "react";
import "./CartCards.css";
import { AppContext } from "../../AppContext/AppCotext";
import { Modal } from "@mui/material";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import ModalDialog from "@mui/joy/ModalDialog";
import Button from "@mui/joy/Button";

import { useState } from "react";
import DeleteBtn from "../../pages/Products/DeleteButton";
export default function CartCards({
  id,
  productName,
  productPrice,
  productImage,
  currencySign,
  quantity,
}) {
  const { putDot, deleteFromCart, increase, decrease } = useContext(AppContext);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="cart-cards-layout">
      <div className="cart-card">
        <img className="product-image" src={productImage} alt={productName} />
        <div className="product-details">
          <h2 className="productName">Product: {productName}</h2>
        </div>

        <div className="product-details2">
          <p className="productPrice">
            Price of item: {putDot(productPrice)}
            {currencySign}
          </p>
          <p className="productPrice">
            Total price: {putDot(productPrice * quantity)}
            {currencySign}
          </p>

          <p className="product-quantity">Quantity: {quantity}</p>
        </div>
        <div className="btn-group">
          <Button
            color="success"
            onClick={() => {
              decrease(id);
            }}
            style={{ width: 30 }}
          >
            -
          </Button>
          <Button
            color="success"
            onClick={() => {
              increase(id);
            }}
            style={{ width: 30 }}
          >
            +
          </Button>
        </div>
        <div>
          <DeleteBtn className="clr-button" onDelete={handleOpen}>
            Open modal
          </DeleteBtn>
          <Modal open={open} onClose={handleClose}>
            <ModalDialog color="danger" size="lg" variant="soft">
              <Typography style={{ margin: "20px" }}>
                Are you sure you want to remove <br></br>this product?
              </Typography>
              <div
                className="buttons"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "20px",
                }}
              >
                <Button
                  onClick={() => {
                    deleteFromCart(id);
                  }}
                >
                  YES
                </Button>

                <Button onClick={handleClose}>No</Button>
              </div>
              <ModalClose onClick={handleClose} />
            </ModalDialog>
          </Modal>
        </div>
      </div>
    </div>
  );
}
