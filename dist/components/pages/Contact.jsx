// import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useState } from "react";

function Contact() {
  // Setting the component's initial state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const formStyle = {
    backgroundImage: "url('/src/assets/contact.jpg')",
    minHeight: 1000,
    color: "white",
    // backgroundPosition: "center"
  };

  const handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change
    const value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (event) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    alert(
      `Thank you ${formData.name}! I will get back to you as soon as possible.`
    );
    setFormData({
      name: "",
      email: "",
      phone: "",
    });
  };

  return (
    <div>
      <Navbar />
      <form className="p-5 mb-7 bg-body-tertiary rounded-3" style={formStyle}>
        <div className="container py-5 ">
          <div className="mb-3">
            <label className="form-label">Your Name</label>
            <input
              className="form-control"
              value={formData.name}
              name="name"
              onChange={handleInputChange}
              type="text"
              placeholder="Required"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Your Email Address</label>
            <input
              className="form-control"
              value={formData.email}
              name="email"
              onChange={handleInputChange}
              type="email"
              placeholder="You must provide either your email address or phone number"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Your Phone Number</label>
            <input
              className="form-control"
              value={formData.phone}
              name="phone"
              onChange={handleInputChange}
              type="number"
              placeholder="You must provide either your email address or phone number"
            />
          </div>
          <button
            type="button"
            onClick={handleFormSubmit}
            className="btn btn-outline-light"
          >
            Leave a message
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
}

export default Contact;
