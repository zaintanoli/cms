import mongoose from 'mongoose';

const assettypecreationSchema = new mongoose.Schema({
  assetTypeId: {
    type: String,
    required: true,
    unique: true,
  },
  assetTypeName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  category: {
    type: String,
  },
  status: {
    type: String,
  },
  creator: {
    type: String,
  },
});

const assetTypeCreation = mongoose.model(
  'assetTypeCreation',
  assetTypeCreationSchema
);

export default assetTypeCreation;
