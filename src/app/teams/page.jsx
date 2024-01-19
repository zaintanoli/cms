"use client"
import React, { useState } from 'react';

function Teams() {
  const [formData, setFormData] = useState({
    team: '',
    employeeNo: '',
    employeeName: '',
    personalContact: '',
    qualification: '',
    staffOf: '',
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
    // Optionally, you can clear the form here
    setFormData({
      team: '',
      employeeNo: '',
      employeeName: '',
      personalContact: '',
      qualification: '',
      staffOf: '',
    });
  };

  return (
    <div>
      <h1>Team Information</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="team">Team:</label>
          <input
            type="text"
            id="team"
            name="team"
            value={formData.team}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="employeeNo">Employee No.:</label>
          <input
            type="text"
            id="employeeNo"
            name="employeeNo"
            value={formData.employeeNo}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="employeeName">Employee Name:</label>
          <input
            type="text"
            id="employeeName"
            name="employeeName"
            value={formData.employeeName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="personalContact">Personal Contact:</label>
          <input
            type="text"
            id="personalContact"
            name="personalContact"
            value={formData.personalContact}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="qualification">Qualification:</label>
          <input
            type="text"
            id="qualification"
            name="qualification"
            value={formData.qualification}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="staffOf">Staff Of:</label>
          <input
            type="text"
            id="staffOf"
            name="staffOf"
            value={formData.staffOf}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Teams;
