import React, { useContext } from "react";
import "./CartCards.css";
import { AppContext } from "../../AppContext/AppCotext";
import { Button } from "@mui/material";
import { Modal } from "@mui/material";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import ModalDialog from "@mui/joy/ModalDialog";
import { useState } from "react";
import DeleteBtn from "../../pages/Products/DeleteButton";
export default function CartCards({
  id,
  productName,
  productPrice,
  productImage,
  quantity,
}) {
  const { deleteFromCart, increase, decrease } = useContext(AppContext);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="cart-card">
      <img className="product-image" src={productImage} alt={productName} />
      <div className="product-details">
        <h2 className="productName">Product: {productName}</h2>
        <p className="productPrice">Price: {productPrice * quantity}$</p>
        <p className="product-quantity">Quantity: {quantity}</p>
        <div>
          {/* <DeleteButton
            onDelete={() => {
              deleteFromCart(id);
            }} */}
          {/* /> */}
          <DeleteBtn onDelete={handleOpen}>Open modal</DeleteBtn>
          <Modal open={open} onClose={handleClose}>
            <ModalDialog color="danger" size="lg" variant="soft">
              <Typography style={{ margin: "20px" }}>
                Are you sure you want to remove <br></br>this product?
              </Typography>
              <div
                className="buttons"
                style={{ display: "flex", justifyContent: "center" }}
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

      <button
        onClick={() => {
          decrease(id);
        }}
        style={{ width: 30 }}
      >
        -
      </button>
      <p></p>
      <button
        onClick={() => {
          increase(id);
        }}
        style={{ width: 30 }}
      >
        +
      </button>
    </div>
  );
}
