import connectToDB from "@/utils/db";
import PermissionCreationModel from "@/models/permissioncreation"; // Adjust the import based on your file structure

export const PATCH = async (request) => {
  const{
        permissionId,
        permissionName,
        description,
        timeStamp,
        status,
        creatorId,
  } = await request.json();
  console.log(
    permissionId,
    permissionName,
    description,
    timeStamp,
    status,
    creatorId,
  );
  try {
    await connectToDB();

    const existingPermissionCreation = await permissioncreationModel.findById(id);
    if (!existingPermission) {
      const response = {
        message: `Permission with id ${id} not found`,
      };
      return new Response(JSON.stringify(response), { status: 404 });
    }

    existingPermissionCreation.permissionId = permissionId;
    existingPermissionCreation.permissionName = permissionName;
    existingPermissionCreation.description = description;
    existingPermissionCreation.timeStamp = timeStamp;
    existingPermissionCreation.status = status;
    existingPermissionCreation.creatorId = creatorId;

    await existingPermissionCreation.save();

    const response = {
      message: `Permission type with id ${id} is updated`,
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
    
        const allPermission = await permissioncreationModel.find({}).sort({ _id: 1 }).exec();
    
        return new Response(JSON.stringify(allPermission), { status: 200 });
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
  
      const deletedPermission = await permissioncreationModel.findByIdAndDelete(id);
  
      if (!deletedPermission) {
        const response = {
          message: `Permission with id ${id} not found`,
        };
        return new Response(JSON.stringify(response), { status: 404 });
      }
  
      const response = {
        message: `Permission with id ${id} is deleted`,
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
      permissionId,
      permissionName,
      description,
      timeStamp,
      status,
      creatorId,
    } = await request.json();
  
    console.log(
      permissionId,
      permissionName,
      description,
      timeStamp,
      status,
      creatorId,
    );
  
    try {
      await connectToDB();
  
      // Correct the typo here: "PermisionCreationModel" to "PermissionCreationModel"
      const existingPermissionCreation = await PermissionCreationModel.findOne({ permissionId });
  
      if (existingPermissionCreation) {
        const response = {
          message: `Permission with id ${permissionId} already exists`,
        };
        return new Response(JSON.stringify(response), { status: 200 });
      }
  
      const newPermissionCreation = new PermissionCreationModel({
        permissionId,
        permissionName,
        description,
        timeStamp,
        status,
        creatorId,
      });
  
      await newPermissionCreation.save();
  
      const response = {
        message: `Permission with id ${permissionId} is created`,
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
  
