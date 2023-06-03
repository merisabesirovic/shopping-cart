import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import "./From.css";

const Basic = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleSubmit = (values, { setSubmitting }) => {
    // Your custom logic goes here
    setIsFormSubmitted(true);
    setSubmitting(false);
  };

  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
          phoneNumber: "",
          address: "",
          postalCode: "",
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
          password: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .required("Password is required"),
          phoneNumber: Yup.number().required("Phone number is required"),
          address: Yup.string().required("Address is required"),
          postalCode: Yup.string().required("Postal code is required"),
        })}
        onSubmit={handleSubmit}
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
          <form
            onSubmit={handleSubmit}
            style={{ display: isFormSubmitted ? "none" : "block" }}
          >
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

            <button className="buttons" type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Basic;
