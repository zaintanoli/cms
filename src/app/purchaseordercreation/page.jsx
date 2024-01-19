"use client" 
import React, { useState } from 'react';
import styles from '../PurchaseOrderCreation/page.module.css';

const PurchaseOrderCreation = () => {
  const [formData, setFormData] = useState({
    date: '',
    billingShippingAddress: '',
    description: '',
    requirements: '',
    quantity: '',
    unitPrice: '',
    totalPrice: '',
    paymentTerms: '',
    deliveryDateTerms: '',
    termsConditions: '',
    approvals: '',
    timestamp: '',
    status: '',
    purchaseOrderReqId: '',
    purchaseOrderRequest: '',
    creator: '',
    vendor: '',
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
      const response = await fetch('/api/purchaseordercreation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Purchase Order data submitted successfully');
        // Optionally, you can clear the form here
        setFormData({
          date: '',
          billingShippingAddress: '',
          description: '',
          requirements: '',
          quantity: '',
          unitPrice: '',
          totalPrice: '',
          paymentTerms: '',
          deliveryDateTerms: '',
          termsConditions: '',
          approvals: '',
          timestamp: '',
          status: '',
          purchaseOrderReqId: '',
          purchaseOrderRequest: '',
          creator: '',
          vendor: '',
        });
      } else {
        console.error('Purchase Order data submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Purchase Order Creation</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.formRow}>
          <div className={styles.formField}>
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formField}>
            <label htmlFor="billingShippingAddress">Billing/Shipping Address:</label>
            <input
              type="text"
              id="billingShippingAddress"
              name="billingShippingAddress"
              value={formData.billingShippingAddress}
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
            <label htmlFor="requirements">Requirements:</label>
            <textarea
              id="requirements"
              name="requirements"
              value={formData.requirements}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formField}>
            <label htmlFor="quantity">Quantity:</label>
            <input
              type="text"
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formField}>
            <label htmlFor="unitPrice">Unit Price:</label>
            <input
              type="text"
              id="unitPrice"
              name="unitPrice"
              value={formData.unitPrice}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formField}>
            <label htmlFor="totalPrice">Total Price:</label>
            <input
              type="text"
              id="totalPrice"
              name="totalPrice"
              value={formData.totalPrice}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formField}>
            <label htmlFor="paymentTerms">Payment Terms:</label>
            <input
              type="text"
              id="paymentTerms"
              name="paymentTerms"
              value={formData.paymentTerms}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formField}>
            <label htmlFor="deliveryDateTerms">Delivery Date Terms:</label>
            <input
              type="text"
              id="deliveryDateTerms"
              name="deliveryDateTerms"
              value={formData.deliveryDateTerms}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formField}>
            <label htmlFor="termsConditions">Terms & Conditions:</label>
            <textarea
              id="termsConditions"
              name="termsConditions"
              value={formData.termsConditions}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formField}>
            <label htmlFor="approvals">Approvals:</label>
            <input
              type="text"
              id="approvals"
              name="approvals"
              value={formData.approvals}
              onChange={handleChange}
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
        </div>

        <div className={styles.formRow}>
          <div className={styles.formField}>
            <label htmlFor="purchaseOrderReqId">Purchase Order Request ID:</label>
            <input
              type="text"
              id="purchaseOrderReqId"
              name="purchaseOrderReqId"
              value={formData.purchaseOrderReqId}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formField}>
            <label htmlFor="purchaseOrderRequest">Purchase Order Request:</label>
            <input
              type="text"
              id="purchaseOrderRequest"
              name="purchaseOrderRequest"
              value={formData.purchaseOrderRequest}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formField}>
            <label htmlFor="creator">Creator:</label>
            <input
              type="text"
              id="creator"
              name="creator"
              value={formData.creator}
              onChange={handleChange}
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

export default PurchaseOrderCreation;