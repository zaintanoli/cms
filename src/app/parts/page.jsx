"use client" 
import React, { useState } from 'react';
import styles from '../parts/page.module.css';

const Parts = () => {
  const [formData, setFormData] = useState({
    partNumber: '',
    partName: '',
    partDescription: '',
    componentOf: '',
    shelfLife: '',
    maintenanceRecord: '',
    serviceRecord: '',
    schematics: '',
    dimensions: '',
    warehouseNo: '',
    specialInstructions: '',
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
      const response = await fetch('/api/parts', {
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
          partNumber: '',
          partName: '',
          partDescription: '',
          componentOf: '',
          shelfLife: '',
          maintenanceRecord: '',
          serviceRecord: '',
          schematics: '',
          dimensions: '',
          warehouseNo: '',
          specialInstructions: '',
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
      <h1>Parts Information</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.formRow}>
          <div className={styles.formField}>
            <label htmlFor="partNumber">Part Number:</label>
            <input
              type="text"
              id="partNumber"
              name="partNumber"
              value={formData.partNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formField}>
            <label htmlFor="partName">Part Name:</label>
            <input
              type="text"
              id="partName"
              name="partName"
              value={formData.partName}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formField}>
            <label htmlFor="partDescription">Part Description:</label>
            <input
              type="text"
              id="partDescription"
              name="partDescription"
              value={formData.partDescription}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        
        <div className={styles.formRow}>
          <div className={styles.formField}>
            <label htmlFor="componentOf">Component Of:</label>
            <input
              type="text"
              id="componentOf"
              name="componentOf"
              value={formData.componentOf}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formField}>
            <label htmlFor="shelfLife">Shelf Life:</label>
            <input
              type="text"
              id="shelfLife"
              name="shelfLife"
              value={formData.shelfLife}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formField}>
            <label htmlFor="maintenanceRecord">Maintenance Record:</label>
            <input
              type="text"
              id="maintenanceRecord"
              name="maintenanceRecord"
              value={formData.maintenanceRecord}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        
        <div className={styles.formRow}>
          <div className={styles.formField}>
            <label htmlFor="serviceRecord">Service Record:</label>
            <input
              type="text"
              id="serviceRecord"
              name="serviceRecord"
              value={formData.serviceRecord}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formField}>
            <label htmlFor="schematics">Schematics:</label>
            <input
              type="text"
              id="schematics"
              name="schematics"
              value={formData.schematics}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formField}>
            <label htmlFor="dimensions">Dimensions:</label>
            <input
              type="text"
              id="dimensions"
              name="dimensions"
              value={formData.dimensions}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formField}>
            <label htmlFor="warehouseNo">Warehouse No.:</label>
            <input
              type="text"
              id="warehouseNo"
              name="warehouseNo"
              value={formData.warehouseNo}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formField}>
            <label htmlFor="specialInstructions">Special Instructions:</label>
            <input
              type="text"
              id="specialInstructions"
              name="specialInstructions"
              value={formData.specialInstructions}
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

export default Parts;
