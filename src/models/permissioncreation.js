import mongoose from 'mongoose';

const permissioncreationSchema = new mongoose.Schema({
  permissionId: {
    type: String,
    required: true,
    unique: true,
  },
  permissionName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  timeStamp: {
    type: String,
  },
  status: {
    type: String,
  },
  creatorID: {
    type: String,
  },
});

const permissioncreation = mongoose.model(
  'permissionCreation',
  permissioncreationSchema
);

export default permissioncreation;
