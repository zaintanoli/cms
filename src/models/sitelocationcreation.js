import mongoose from 'mongoose';

const siteLocationSchema = new mongoose.Schema(
  {
    siteName: {
      type: String,
    },
    mapCoordinates: {
      type: String,
    },
    siteDescription: {
      type: String,
    },
    siteAddress: {
      type: String,
    },
  }
);

const siteLocation = mongoose.model('siteLocation', siteLocationSchema);
export default siteLocation;
