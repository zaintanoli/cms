"use client" 
import React, { useState } from 'react';
import styles from '../RoleCreation/page.module.css';
const RoleCreation = () => {
  const [formData, setFormData] = useState({
    roleId: '',
    roleName: '',
    description: '',
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
      const response = await fetch('/api/createRole', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Role data submitted successfully');
        // Optionally, you can clear the form here
        setFormData({
          roleId: '',
          roleName: '',
          description: '',
          timeStamp: '',
          status: '',
          creatorId: '',
        });
      } else {
        console.error('Role data submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Role Creation</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.formRow}>
          <div className={styles.formField}>
            <label htmlFor="roleId">Role ID:</label>
            <input
              type="text"
              id="roleId"
              name="roleId"
              value={formData.roleId}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formField}>
            <label htmlFor="roleName">Role Name:</label>
            <input
              type="text"
              id="roleName"
              name="roleName"
              value={formData.roleName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formField}>
            <label htmlFor="description">Description:</label>
            <input
              type="text"
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
            <label htmlFor="timeStamp">Timestamp:</label>
            <input
              type="datetime-local"
              id="timeStamp"
              name="timeStamp"
              value={formData.timeStamp}
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

export default RoleCreation;
