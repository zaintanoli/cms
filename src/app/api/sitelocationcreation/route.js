import connectToDB from "@/utils/db";
import sitelocationcreationModel from "@/models/sitelocationcreation";

export const PATCH = async (request) => {
  const {siteName, mapCoordinates, siteDescription, siteAddress, updatedBy } = await request.json();

  console.log(siteName, mapCoordinates, siteDescription, siteAddress);
  const lastUpdate = new Date();

  try {
    await connectToDB();

    const existingSiteLocationCreation = await sitelocationcreationModel.findById(id);
    if (!existingSiteLocation) {
      const response = {
        message: `Site Location with id ${id} not found`,
      };
      return new Response(JSON.stringify(response), { status: 404 });
    }

    existingSiteLocationCreation.siteName = siteName;
    existingSiteLocationCreation.mapCoordinates = mapCoordinates;
    existingSiteLocationCreation.siteDescription = siteDescription;
    existingSiteLocationCreation.siteAddress = siteAddress;
    existingSiteLocationCreation.lastUpdate = lastUpdate;
    existingSiteLocationCreation.updatedBy = updatedBy;

    await existingSiteLocationCreation.save();

    const response = {
      message: `Site Location with id ${id} is updated`,
    };
    return new Response(JSON.stringify(response), { status: 200 });
  } catch (error) {
    console.log(error);
  }
};

export const GET = async (req, res) => {
  try {
    await connectToDB();

    const allSiteLocationCreations = await sitelocationcreationModel.find({}).sort({ _id: 1 }).exec();

    return new Response(JSON.stringify(allSiteLocations), { status: 200 });
  } catch (error) {
    console.log(error);
  }
};

export const DELETE = async (request) => {
  const { id } = await request.json();

  console.log(id);

  try {
    await connectToDB();

    const deletedSiteLocationCreation = await sitelocationcreationModel.findByIdAndDelete(id);

    if (!deletedSiteLocation) {
      const response = {
        message: `Site Location with id ${id} not found`,
      };
      return new Response(JSON.stringify(response), { status: 404 });
    }

    const response = {
      message: `Site Location with id ${id} is deleted`,
    };
    return new Response(JSON.stringify(response), { status: 200 });
  } catch (error) {
    console.log(error);
  }
};

export const POST = async (request) => {
  const { siteName, mapCoordinates, siteDescription, siteAddress, updatedBy } = await request.json();

  console.log(siteName, mapCoordinates, siteDescription, siteAddress);
  const lastUpdate = new Date();
  const createdAt = new Date();

  try {
    await connectToDB();
    const existingSiteLocation = await siteLocationModel.findOne({ siteName });

    if (existingSiteLocation) {
      const response = {
        message: `Site Location with name ${siteName} already exists`,
      };
      return new Response(JSON.stringify(response), { status: 200 });
    }

    const newSiteLocation = new sitelocationcreationModel({
      siteName,
      mapCoordinates,
      siteDescription,
      siteAddress,
      createdAt,
      lastUpdate,
      updatedBy,
    });

    await newSiteLocationCreation.save();

    const response = {
      message: `Site Location with name ${siteName} is created`,
    };
    return new Response(JSON.stringify(response), { status: 201 });
  } catch (error) {
    console.log(error);
  }
};
