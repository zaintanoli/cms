"use client" 
import React, { useState } from 'react';
import styles from "../EquipmentStatusCreation/page.module.css" 

const EquipmentStatusCreation = () => {
  const [formData, setFormData] = useState({
    statusId: '',
    statusName: '',
    description: '',
    timestamp: '',
    creatorId: '',
    status: '',
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
      // You can send a POST request to your API with the formData here

      console.log('Equipment Status data submitted successfully');

      // Optionally, you can clear the form here
      setFormData({
        statusId: '',
        statusName: '',
        description: '',
        timestamp: '',
        creatorId: '',
        status: '',
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Equipment Status Creation</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.formRow}>
          <div className={styles.formField}>
            <label htmlFor="statusId">Status ID:</label>
            <input
              type="text"
              id="statusId"
              name="statusId"
              value={formData.statusId}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formField}>
            <label htmlFor="statusName">Status Name:</label>
            <input
              type="text"
              id="statusName"
              name="statusName"
              value={formData.statusName}
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
            <label htmlFor="timestamp">Timestamp:</label>
            <input
              type="datetime-local"
              id="timestamp"
              name="timestamp"
              value={formData.timestamp}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formField}>
            <label htmlFor="creatorId">Creator ID:</label>
            <input
              type="text"
              id="creatorId"
              name="creatorId"
              value={formData.creatorId}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className={styles.formRow}>
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

export default EquipmentStatusCreation;
