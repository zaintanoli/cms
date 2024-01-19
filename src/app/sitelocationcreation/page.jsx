"use client";
import React, { useState } from 'react';
import styles from '../sitelocationcreation/page.module.css';

const SiteLocationCreation = () => {
  const [formData, setFormData] = useState({
    siteName: '',
    mapCoordinates: '',
    siteDescription: '',
    siteAddress: '',
  });

  const [siteData, setSiteData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
        
    // Regular expression to allow only alphabets
    const alphaRegex = /^[A-Za-z]+$/;

    // Check if the input value is alphabetic or empty
    if (value === '' || alphaRegex.test(value)) {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleAdd = () => {
    if (editIndex !== null) {
      // If editIndex is not null, update the existing item
      const updatedData = [...siteData];
      updatedData[editIndex] = formData;
      setSiteData(updatedData);
      setEditIndex(null);
    } else {
      // If editIndex is null, add a new item
      setSiteData([...siteData, formData]);
    }

    setFormData({
      siteName: '',
      mapCoordinates: '',
      siteDescription: '',
      siteAddress: '',
    });
  };

  const handleDelete = (index) => {
    const newData = [...siteData];
    newData.splice(index, 1);
    setSiteData(newData);
  };

  const handleEdit = (index) => {
    const editedData = siteData[index];
    setFormData(editedData);
    setEditIndex(index);
  };

  return (
    <div className={styles.container}>
      <h1>Site and Location Creation</h1>
      <form>
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
        </div>

        <div className={styles.formRow}>
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
            <button type="button" onClick={handleAdd}>
              {editIndex !== null ? 'Update' : 'Add'}
            </button>
          </div>
        </div>
      </form>

      <div>
        <h2>Site Data</h2>
        <table className={styles.siteDataTable}>
          <thead>
            <tr>
              <th>Site Name</th>
              <th>Map Coordinates</th>
              <th>Site Description</th>
              <th>Site Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {siteData.map((data, index) => (
              <tr key={index}>
                <td>{data.siteName}</td>
                <td>{data.mapCoordinates}</td>
                <td>{data.siteDescription}</td>
                <td>{data.siteAddress}</td>
                <td>
                  <button onClick={() => handleEdit(index)}>Edit</button>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SiteLocationCreation;
