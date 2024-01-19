"use client" 
import React, { useState } from 'react';
import styles from "../AssetTypeCreation/page.module.css" 

const AssetTypeCreation = () => {
  const [formData, setFormData] = useState({
    assetTypeId: '',
    assetTypeName: '',
    description: '',
    category: '',
    status: '',
    creator: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Handle form submission here, e.g., sending data to the server
      console.log('Form data submitted:', formData);
      // Optionally, you can clear the form here
      setFormData({
        assetTypeId: '',
        assetTypeName: '',
        description: '',
        category: '',
        status: '',
        creator: '',
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Asset Type Creation</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.formRow}>
          <div className={styles.formField}>
            <label htmlFor="assetTypeId">Asset Type ID:</label>
            <input
              type="text"
              id="assetTypeId"
              name="assetTypeId"
              value={formData.assetTypeId}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formField}>
            <label htmlFor="assetTypeName">Asset Type Name:</label>
            <input
              type="text"
              id="assetTypeName"
              name="assetTypeName"
              value={formData.assetTypeName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formField}>
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formField}>
            <label htmlFor="category">Category:</label>
            <input
              type="text"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formField}>
            <label htmlFor="status">Status:</label>
            <input
              type="text"
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formField}>
            <label htmlFor="creator">Creator:</label>
            <input
              type="text"
              id="creator"
              name="creator"
              value={formData.creator}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formField}>
            <button type="submit">Submit</button>
          </div>
          <div className={styles.formField}>
            <button type="button">Discard</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AssetTypeCreation;
