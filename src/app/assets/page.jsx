"use client" 
import React, { useState } from 'react';
import styles from "../assets/page.module.css" 

const Assets = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    status: '',
    maritalStatus: '',
    gender: '',
    startDate: '',
  });

  const [submittedData, setSubmittedData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleEdit = (index) => {
    const editedData = submittedData[index];
    setFormData(editedData);
    setSubmittedData((prevData) =>
      prevData.filter((data, i) => i !== index)
    );
  };
  const handleDelete = (index) => {
    setSubmittedData((prevData) =>
      prevData.filter((data, i) => i !== index)
    );
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("api/assets", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Asset data submitted successfully');
        setSubmittedData([...submittedData, formData]);

        // Optionally, you can clear the form here
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          status: '',
          maritalStatus: '',
          gender: '',
          startDate: '',
        });
      } else {
        console.error('Asset data submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Customer Registration</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.formRow}>
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
        </div>
        <div className={styles.formRow}>
          <div className={styles.formField}>
            <label htmlFor="status">Status:</label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="">Select Active </option>
              <option value="True">Active</option>
              <option value="False">Inactive</option>
            </select>
          </div>
          <div className={styles.formField}>
            <label htmlFor="maritalStatus">Marital Status:</label>
            <select
              id="maritalStatus"
              name="maritalStatus"
              value={formData.maritalStatus}
              onChange={handleChange}
            >
              <option value="">Select Marital Status </option>
              <option value="single">Single</option>
              <option value="married">Married</option>
              <option value="divorced">Divorced</option>
            </select>
          </div>
          <div className={styles.formField}>
            <label htmlFor="gender">Gender:</label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">Select Gender </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.formField}>
            <label htmlFor="startDate">Estimated Start Date:</label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={formData.startDate}
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
      {submittedData.length > 0 && (
        <div>
          <h2>Submitted Data</h2>
          <table className={styles.submittedDataTable}>
            <thead>
              <tr>
                {Object.keys(submittedData[0]).map((key) => (
                  <th key={key}>{key}</th>
                ))}
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {submittedData.map((data, index) => (
                <tr key={index}>
                  {Object.values(data).map((value, subIndex) => (
                    <td key={subIndex}>{value}</td>
                  ))}
                  <td>
                    <button onClick={() => handleEdit(index)}>Edit</button>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Assets;