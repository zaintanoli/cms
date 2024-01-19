import mongoose from 'mongoose';

const partsSchema = new mongoose.Schema({
  partNumber: {
    type: String,
    required: true,
    unique: true,
  },
  partName: {
    type: String,
    required: true,
  },
  partDescription: {
    type: String,
  },
  componentOf: {
    type: String,
  },
  shelfLife: {
    type: String,
  },
  maintenanceRecord: {
    type: String,
  },
  serviceRecord: {
    type: String,
  },
  schematics: {
    type: String,
  },
  dimensions: {
    type: String,
  },
  warehouseNo: {
    type: String,
  },
  specialInstructions:{
    type:String,
  },
});

const parts = mongoose.model(
  'parts',
  parts
);

export default parts;
