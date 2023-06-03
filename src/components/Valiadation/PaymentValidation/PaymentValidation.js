import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import "./PaymentValidation.css";

const PaymentForm = () => {
  const [isOrderPlaced, setOrderPlaced] = useState(false);

  const handlePaymentSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      console.log("Payment submitted:", values);
      setSubmitting(false);
      setOrderPlaced(true);
    }, 1000);
  };

  return (
    <div className="container">
      {!isOrderPlaced && (
        <Formik
          initialValues={{
            email: "",
            password: "",
            phoneNumber: "",
            address: "",
            postalCode: "",
            imeNaKartici: "",
            brojKartice: "",
            datumIsticanja: "",
            sigurnosniKod: "",
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email("Invalid email address")
              .required("Email is required"),
            password: Yup.string()
              .min(6, "Password must be at least 6 characters")
              .required("Password is required"),
            phoneNumber: Yup.string().required("Phone number is required"),
            address: Yup.string().required("Address is required"),
            postalCode: Yup.string().required("Postal code is required"),
            imeNaKartici: Yup.string().required("Cardholder name is required"),
            brojKartice: Yup.string().required("Card number is required"),
            datumIsticanja: Yup.string().required(
              "Expiration date is required"
            ),
            sigurnosniKod: Yup.string().required("Security code is required"),
          })}
          onSubmit={handlePaymentSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="payment-row">
                <div className="payment-cont">
                  <div>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                    {errors.email && touched.email && (
                      <div className="error-message">{errors.email}</div>
                    )}
                  </div>
                  <div>
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                    />
                    {errors.password && touched.password && (
                      <div className="error-message">{errors.password}</div>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input
                      type="text"
                      name="phoneNumber"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.phoneNumber}
                    />
                    {errors.phoneNumber && touched.phoneNumber && (
                      <div className="error-message">{errors.phoneNumber}</div>
                    )}
                  </div>
                  <div>
                    <label htmlFor="phoneNumber">Another phone Number</label>
                    <input
                      type="text"
                      name="phoneNumber"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.phoneNumber}
                    />
                    {errors.phoneNumber && touched.phoneNumber && (
                      <div className="error-message">{errors.phoneNumber}</div>
                    )}
                  </div>

                  <div>
                    <label htmlFor="address">Address</label>
                    <input
                      type="text"
                      name="address"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.address}
                    />
                    {errors.address && touched.address && (
                      <div className="error-message">{errors.address}</div>
                    )}
                  </div>
                </div>
                <div className="payment-cont">
                  <div>
                    <label htmlFor="postalCode">Postal Code</label>
                    <input
                      type="text"
                      name="postalCode"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.postalCode}
                    />
                    {errors.postalCode && touched.postalCode && (
                      <div className="error-message">{errors.postalCode}</div>
                    )}
                  </div>

                  <div>
                    <label htmlFor="imeNaKartici">Cardholder Name</label>
                    <input
                      type="text"
                      name="imeNaKartici"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.imeNaKartici}
                    />
                    {errors.imeNaKartici && touched.imeNaKartici && (
                      <div className="error-message">{errors.imeNaKartici}</div>
                    )}
                  </div>
                  <div>
                    <label htmlFor="brojKartice">Card Number</label>
                    <input
                      type="text"
                      name="brojKartice"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.brojKartice}
                    />
                    {errors.brojKartice && touched.brojKartice && (
                      <div className="error-message">{errors.brojKartice}</div>
                    )}
                  </div>
                  <div>
                    <label htmlFor="datumIsticanja">Expiration Date</label>
                    <input
                      type="text"
                      name="datumIsticanja"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.datumIsticanja}
                      placeholder="MM/GG"
                    />
                    {errors.datumIsticanja && touched.datumIsticanja && (
                      <div className="error-message">
                        {errors.datumIsticanja}
                      </div>
                    )}
                  </div>
                  <div>
                    <label htmlFor="sigurnosniKod">Security Code</label>
                    <input
                      type="text"
                      name="sigurnosniKod"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.sigurnosniKod}
                    />
                    {errors.sigurnosniKod && touched.sigurnosniKod && (
                      <div className="error-message">
                        {errors.sigurnosniKod}
                      </div>
                    )}
                  </div>

                  <button
                    className="buttons"
                    type="submit"
                    disabled={isSubmitting}
                    style={{ justifySelf: "center" }}
                  >
                    SUBMIT
                  </button>
                </div>
              </div>
            </form>
          )}
        </Formik>
      )}
      {isOrderPlaced && (
        <div className="order-placed-message">
          <p>Your order has been placed!</p>
        </div>
      )}
    </div>
  );
};

export default PaymentForm;
