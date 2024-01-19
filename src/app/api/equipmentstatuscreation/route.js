import connectToDB from "@/utils/db";
import EquipmentStatusModel from "@/models/equipmentStatus"; // Adjust the import based on your file structure

export const PATCH = async (request) => {
  const {
    id,
    statusId,
    statusName,
    description,
    timestamp,
    creatorId,
    status,
  } = await request.json();

  console.log(
    id,
    statusId,
    statusName,
    description,
    timestamp,
    creatorId,
    status
  );

  try {
    await connectToDB();

    const existingEquipmentStatus = await EquipmentStatusModel.findById(id);
    if (!existingEquipmentStatus) {
      const response = {
        message: `Equipment status with id ${id} not found`,
      };
      return new Response(JSON.stringify(response), { status: 404 });
    }

    existingEquipmentStatus.statusId = statusId;
    existingEquipmentStatus.statusName = statusName;
    existingEquipmentStatus.description = description;
    existingEquipmentStatus.timestamp = timestamp;
    existingEquipmentStatus.creatorId = creatorId;
    existingEquipmentStatus.status = status;

    await existingEquipmentStatus.save();

    const response = {
      message: `Equipment status with id ${id} is updated`,
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

    const allEquipmentStatuses = await EquipmentStatusModel.find({}).sort({ _id: 1 }).exec();

    return new Response(JSON.stringify(allEquipmentStatuses), { status: 200 });
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

    const deletedEquipmentStatus = await EquipmentStatusModel.findByIdAndDelete(id);

    if (!deletedEquipmentStatus) {
      const response = {
        message: `Equipment status with id ${id} not found`,
      };
      return new Response(JSON.stringify(response), { status: 404 });
    }

    const response = {
      message: `Equipment status with id ${id} is deleted`,
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
    statusId,
    statusName,
    description,
    timestamp,
    creatorId,
    status,
  } = await request.json();

  console.log(
    statusId,
    statusName,
    description,
    timestamp,
    creatorId,
    status
  );

  try {
    await connectToDB();

    const existingEquipmentStatus = await EquipmentStatusModel.findOne({ statusId });

    if (existingEquipmentStatus) {
      const response = {
        message: `Equipment status with id ${statusId} already exists`,
      };
      return new Response(JSON.stringify(response), { status: 200 });
    }

    const newEquipmentStatus = new EquipmentStatusModel({
      statusId,
      statusName,
      description,
      timestamp,
      creatorId,
      status,
    });

    await newEquipmentStatus.save();

    const response = {
      message: `Equipment status with id ${statusId} is created`,
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
