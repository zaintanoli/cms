"use client" 
import React, { useState } from 'react';
import styles from '../ServiceRequest/page.module.css';


const ServiceRequestCreation = () => {
  const [formData, setFormData] = useState({
    serviceRequestId: '',
    name: '',
    type: '',
    assetId: '',
    tag: '',
    description: '',
    photo: '',
    approvalStatus: '',
    timeStamp: '',
    status: '',
    creatorId: '',
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
      const response = await fetch('/api/createServiceRequest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Service Request data submitted successfully');
        // Optionally, you can clear the form here
        setFormData({
          serviceRequestId: '',
          name: '',
          type: '',
          assetId: '',
          tag: '',
          description: '',
          photo: '',
          approvalStatus: '',
          timeStamp: '',
          status: '',
          creatorId: '',
        });
      } else {
        console.error('Service Request data submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Service Request Creation</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.formRow}>
          <div className={styles.formField}>
            <label htmlFor="serviceRequestId">Service Request ID:</label>
            <input
              type="text"
              id="serviceRequestId"
              name="serviceRequestId"
              value={formData.serviceRequestId}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formField}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formField}>
            <label htmlFor="type">Type:</label>
            <input
              type="text"
              id="type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formField}>
            <label htmlFor="assetId">Asset ID:</label>
            <input
              type="text"
              id="assetId"
              name="assetId"
              value={formData.assetId}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formField}>
            <label htmlFor="tag">Tag:</label>
            <input
              type="text"
              id="tag"
              name="tag"
              value={formData.tag}
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
            <label htmlFor="photo">Photo:</label>
            <input
              type="file"
              id="photo"
              name="photo"
              value={formData.photo}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formField}>
            <label htmlFor="approvalStatus">Approval Status:</label>
            <input
              type="text"
              id="approvalStatus"
              name="approvalStatus"
              value={formData.approvalStatus}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formField}>
            <label htmlFor="timeStamp">Timestamp:</label>
            <input
              type="datetime-local"
              id="timeStamp"
              name="timeStamp"
              value={formData.timeStamp}
              onChange={handleChange}
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

export default ServiceRequestCreation;
