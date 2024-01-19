"use client" 
import React, { useState } from 'react';
import styles from '../GroupCreation/page.module.css';

const GroupCreation = () => {
  const [formData, setFormData] = useState({
    groupId: '',
    groupName: '',
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
      const response = await fetch('/api/createGroup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Group data submitted successfully');
        // Optionally, you can clear the form here
        setFormData({
          groupId: '',
          groupName: '',
          description: '',
          timeStamp: '',
          status: '',
          creatorId: '',
        });
      } else {
        console.error('Group data submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Group Creation</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.formRow}>
          <div className={styles.formField}>
            <label htmlFor="groupId">Group ID:</label>
            <input
              type="text"
              id="groupId"
              name="groupId"
              value={formData.groupId}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formField}>
            <label htmlFor="groupName">Group Name:</label>
            <input
              type="text"
              id="groupName"
              name="groupName"
              value={formData.groupName}
              onChange={handleChange}
              required
            />
          </div>
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

export default GroupCreation;
