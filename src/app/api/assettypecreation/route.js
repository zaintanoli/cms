import connectToDB from "@/utils/db";
import assettypecreationModel from "@/models/assettypecreation"; // Adjust the import based on your file structure

export const PATCH = async (request) => {
  const {
    id,
    assetTypeId,
    assetTypeName,
    description,
    category,
    status,
    creator,
  } = await request.json();

  console.log(
    id,
    assetTypeId,
    assetTypeName,
    description,
    category,
    status,
    creator
  );

  try {
    await connectToDB();

    const existingAssetTypeCreation = await assettypecreationModel.findById(id);
    if (!existingAssetType) {
      const response = {
        message: `Asset type with id ${id} not found`,
      };
      return new Response(JSON.stringify(response), { status: 404 });
    }

    existingAssetTypeCreation.assetTypeId = assetTypeId;
    existingAssetTypeCreation.assetTypeName = assetTypeName;
    existingAssetTypeCreation.description = description;
    existingAssetTypeCreation.category = category;
    existingAssetTypeCreation.status = status;
    existingAssetTypeCreation.creator = creator;

    await existingAssetTypeCreation.save();

    const response = {
      message: `Asset type with id ${id} is updated`,
    };
    return new Response(JSON.stringify(response), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({ message: "Internal server error" }),
      { status: 500 }
    );
  }
};

export const GET = async (req, res) => {
  try {
    await connectToDB();

    const allAssetTypes = await assettypecreationModel.find({}).sort({ _id: 1 }).exec();

    return new Response(JSON.stringify(allAssetTypes), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({ message: "Internal server error" }),
      { status: 500 }
    );
  }
};

export const DELETE = async (request) => {
  const { id } = await request.json();

  console.log(id);

  try {
    await connectToDB();

    const deletedAssetType = await assetypecreationModel.findByIdAndDelete(id);

    if (!deletedAssetType) {
      const response = {
        message: `Asset type with id ${id} not found`,
      };
      return new Response(JSON.stringify(response), { status: 404 });
    }

    const response = {
      message: `Asset type with id ${id} is deleted`,
      };
      return new Response(JSON.stringify(response), { status: 200 });
    } catch (error) {
      console.log(error);
      return new Response(
        JSON.stringify({ message: "Internal server error" }),
        { status: 500 }
      );
    }
  };

export const POST = async (request) => {
  const {
    assetTypeId,
    assetTypeName,
    description,
    category,
    status,
    creator,
  } = await request.json();

  console.log(
    assetTypeId,
    assetTypeName,
    description,
    category,
    status,
    creator
  );

  try {
    await connectToDB();

    const existingAssetTypeCreation = await assettypecreationModel.findOne({ assetTypeId });

    if (existingAssetType) {
      const response = {
        message: `Asset type with id ${assetTypeId} already exists`,
      };
      return new Response(JSON.stringify(response), { status: 200 });
    }

    const newAssetTypeCreation = new assetTypeCreationModel({
      assetTypeId,
      assetTypeName,
      description,
      category,
      status,
      creator,
    });

    await newAssetType.save();

    const response = {
      message: `Asset type with id ${assetTypeId} is created`,
    };
    return new Response(JSON.stringify(response), { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({ message: "Internal server error" }),
      { status: 500 }
    );
  }
};
