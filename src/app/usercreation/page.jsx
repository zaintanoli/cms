"use client" 
import React, { useState } from 'react';
import styles from '../UserCreation/page.module.css';

const UserCreation = () => {
  const [formData, setFormData] = useState({
    userId: '',
    firstName: '',
    lastName: '',
    password: '',
    email: '',
    phoneNumber: '',
    timeStamp: '',
    creatorId: '',
    status: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/createUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('User data submitted successfully');
        // Optionally, you can clear the form here
        setFormData({
          userId: '',
          firstName: '',
          lastName: '',
          password: '',
          email: '',
          phoneNumber: '',
          timeStamp: '',
          creatorId: '',
          status: '',
        });
      } else {
        console.error('User data submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className={styles.container}>
      <h1>User Creation</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.formRow}>
          <div className={styles.formField}>
            <label htmlFor="userId">User ID:</label>
            <input
              type="text"
              id="userId"
              name="userId"
              value={formData.userId}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formField}>
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formField}>
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formField}>
            <label htmlFor="password">Password:</label>
            <div className={styles.passwordInput}>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                onClick={handlePasswordVisibility}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>
          <div className={styles.formField}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formField}>
            <label htmlFor="phoneNumber">Phone Number:</label>
            <div className={styles.phoneInput}>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
              {/* You can include a dropdown for country codes here */}
            </div>
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

export default UserCreation;
