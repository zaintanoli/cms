"use client" 
import React, { useState } from 'react';
import styles from '../parts/page.module.css';

const Sites = () => {
  const [formData, setFormData] = useState({
    siteName: '',
    mapCoordinates: '',
    siteDescription: '',
    siteAddress: '',
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
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form data submitted successfully');
        // Optionally, you can clear the form here
        setFormData({
          siteName: '',
          mapCoordinates: '',
          siteDescription: '',
          siteAddress: '',
        });
      } else {
        console.error('Form data submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Sites Information</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.formRow}>
          <div className={styles.formField}>
            <label htmlFor="siteName">Site Name:</label>
            <input
              type="text"
              id="siteName"
              name="siteName"
              value={formData.siteName}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formField}>
            <label htmlFor="mapCoordinates">Map Coordinates:</label>
            <input
              type="text"
              id="mapCoordinates"
              name="mapCoordinates"
              value={formData.mapCoordinates}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        
        <div className={styles.formRow}>
          <div className={styles.formField}>
            <label htmlFor="siteDescription">Site Description:</label>
            <input
              type="text"
              id="siteDescription"
              name="siteDescription"
              value={formData.siteDescription}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formField}>
            <label htmlFor="siteAddress">Site Address:</label>
            <input
              type="text"
              id="siteAddress"
              name="siteAddress"
              value={formData.siteAddress}
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

export default Sites;
