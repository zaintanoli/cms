"use client"
import React, { useState } from 'react';
import styles from "../assets/page.module.css"

const FacilityManagement = () => {
  const [formData, setFormData] = useState({
    partName: '',
    attributes: '',
    partNo: '',
    id: '',
    vendor: '',
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, e.g., send data to an API
    console.log(formData);
  };

  return (
    <div className={styles.container}>
      <h1>Parts Information</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.formRow}>
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
            <label htmlFor="attributes">Attributes:</label>
            <input
              type="text"
              id="attributes"
              name="attributes"
              value={formData.attributes}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formField}>
            <label htmlFor="partNo">Part No.:</label>
            <input
              type="text"
              id="partNo"
              name="partNo"
              value={formData.partNo}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.formField}>
            <label htmlFor="id">ID:</label>
            <input
              type="text"
              id="id"
              name="id"
              value={formData.id}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formField}>
            <label htmlFor="vendor">Vendor:</label>
            <input
              type="text"
              id="vendor"
              name="vendor"
              value={formData.vendor}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        {/* Add more fields as needed */}
        <div className={styles.formRow}>
          <div className={styles.formField}>
            <label htmlFor="partDescription">Part Description:</label>
            <input
              type="text"
              id="partDescription"
              name="partDescription"
              value={formData.partDescription}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formField}>
            <label htmlFor="componentOf">Component of:</label>
            <input
              type="text"
              id="componentOf"
              name="componentOf"
              value={formData.componentOf}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.formField}>
            <label htmlFor="shelfLife">Shelf life:</label>
            <input
              type="text"
              id="shelfLife"
              name="shelfLife"
              value={formData.shelfLife}
              onChange={handleChange}
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
            />
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.formField}>
            <label htmlFor="dimensions">Dimensions:</label>
            <input
              type="text"
              id="dimensions"
              name="dimensions"
              value={formData.dimensions}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formField}>
            <label htmlFor="warehouseNo">Warehouse No.:</label>
            <input
              type="text"
              id="warehouseNo"
              name="warehouseNo"
              value={formData.warehouseNo}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.formField}>
            <label htmlFor="specialInstructions">Special Instructions:</label>
            <input
              type="text"
              id="specialInstructions"
              name="specialInstructions"
              value={formData.specialInstructions}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.formField}>
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FacilityManagement;
