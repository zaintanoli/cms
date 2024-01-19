import mongoose from 'mongoose';

const equipmentstatuscreationSchema = new mongoose.Schema({
  statusId: {
    type: String,
    required: true,
    unique: true,
  },
  statusName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  timestamp: {
    type: String,
  },
  creatorId: {
    type: String,
  },
  status: {
    type: String,
  },
});

const EquipmentStatusCreation = mongoose.model(
  'EquipmentStatusCreation',
  equipmentstatuscreationSchema
);
export default EquipmentStatusCreation;
