import mongoose from 'mongoose';

const purchaseordercreationSchema = new mongoose.Schema({
  date: {
    type: String,
  },
  billingShippingAddress: {
    type: String,
  },
  description: {
    type: String,
  },
  requirements: {
    type: String,
  },
  quantity: {
    type: String,
  },
  unitPrice: {
    type: String,
  },
  totalPrice: {
    type: String,
  },
  paymentTerms: {
    type: String,
  },
  deliveryDateTerms: {
    type: String,
  },
  termsConditions: {
    type: String,
  },
  approvals: {
    type: String,
  },
  timestamp: {
    type: String,
  },
  status: {
    type: String,
  },
  purchaseOrderReqId: {
    type: String,
  },
  purchaseOrderRequest: {
    type: String,
  },
  creator: {
    type: String,
  },
  vendor: {
    type: String,
  },
});

const purchaseordercreation = mongoose.model('purchaseordercreation', purchaseordercreationSchema);

export default purchaseordercreation;
