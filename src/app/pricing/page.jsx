"use client"
import React, { useState } from "react";
import styles from "./page.module.css";

const Pricing = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [businessEmail, setBusinessEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [company, setCompany] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      firstName,
      lastName,
      businessEmail,
      phoneNumber,
      company,
    };
    console.log(firstName)
    console.log(JSON.stringify(formData, null, 2));
    console.log(formData)
    try {
      const response = await fetch("/api/pricing", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data= await response.json() 
      if (data.modal) {
        console.log("Pricing data saved!");
      } else {
        console.error("Failed to save pricing data");
      }
    } catch (error) {
      console.error("An error occurred", error);
    }
  };

  return (
    <div className={styles.pricingContainer}>
      <div className={styles.quotes}>
        <p>
          We can provide you with a customized quote for your building O&M needs.
          Our pricing plans are flexible and can be adapted to your specific requirements.
          Please contact us today and our team will get back to you with a proposal.
        </p>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="businessEmail">Business Email</label>
          <input
            type="email"
            id="businessEmail"
            name="businessEmail"
            value={businessEmail}
            onChange={(e) => setBusinessEmail(e.target.value)}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="company">Company</label>
          <input
            type="text"
            id="company"
            name="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>
        <button type="submit" className={styles.submitButton}>Request Pricing</button>
      </form>
    </div>
  );
};

export default Pricing;
