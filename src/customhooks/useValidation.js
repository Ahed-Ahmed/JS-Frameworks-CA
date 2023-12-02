import { useState } from "react";

export const useValidation = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    subject: "",
    email: "",
    body: "",
  });

  const [errors, setErrors] = useState({
    fullname: "",
    subject: "",
    email: "",
    body: "",
    allfielderror: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const validateForm = (data) => {
    const errors = {};

    // Validate fullname field
    if (data.fullname.length < 3) {
      errors.fullname = "Fullname must be at least 3 characters long";
    }

    // Validate subject field
    if (data.subject.length < 3) {
      errors.subject = "Subject must be at least 3 characters long";
    }

    // Validate email field
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      errors.email = "Invalid email address";
    }

    // Validate body field
    if (data.body.length < 3) {
      errors.body = "Body must be at least 3 characters long";
    }

    return Object.keys(errors).length > 0 ? errors : null;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.fullname &&
      !formData.subject &&
      !formData.email &&
      !formData.body
    ) {
      alert("Please fill the required fields");
    } else {
      const validationErrors = validateForm(formData);
      if (validationErrors) {
        setErrors(validationErrors);
      } else {
        console.log("Form submitted:", formData);
        setFormData({
          fullname: "",
          subject: "",
          email: "",
          body: "",
        });
        alert("Data Submitted Successfully Please Check in console");
        setErrors({});
      }
    }
  };
  return {
    handleChange,
    handleSubmit,
    formData,
    errors,
  };
};
