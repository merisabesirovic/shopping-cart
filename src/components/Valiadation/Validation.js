import React from "react";
import From from "./FormValidation/From";
import "./Validation.css";
import PaymentValidation from "./PaymentValidation/PaymentValidation";

export default function Validation() {
  return (
    <div className="validation-container">
      <div style={{ height: "40px" }}></div>
      <h1 className="korpa-k" style={{ margin: "20px auto" }}>
        Add your informations
      </h1>
      <div className="form-group">
        <div>
          <From></From>
        </div>
        <div>
          <PaymentValidation></PaymentValidation>
        </div>
      </div>
    </div>
  );
}
