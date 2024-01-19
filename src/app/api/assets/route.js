import connectToDB from "@/utils/db";
import assetsModel from "@/models/assets";
import mongoose from "mongoose";

export const PATCH = async (request) => {
  const { id, firstName, lastName, email, status, maritalStatus, gender, startDate, updatedBy } = await request.json();

  console.log(id, firstName, lastName, email, status, maritalStatus, gender, startDate);
  const lastUpdate = new Date();

  try {
    await connectToDB();

    const existingAsset = await assetsModel.findById(id);
    if (!existingAsset) {
      const response = {
        message: `Asset with id ${id} not found`,
      };
      return new Response(JSON.stringify(response), { status: 404 });
    }

    existingAsset.firstName = firstName;
    existingAsset.lastName = lastName;
    existingAsset.email = email;
    existingAsset.status = status;
    existingAsset.maritalStatus = maritalStatus;
    existingAsset.gender = gender;
    existingAsset.startDate = startDate;
    existingAsset.lastUpdate = lastUpdate;
    existingAsset.updatedBy = updatedBy;

    await existingAsset.save();

    const response = {
      message: `Asset with id ${id} is updated`,
    };
    return new Response(JSON.stringify(response), { status: 200 });
  } catch (error) {
    console.log(error);
  }
};

export const GET = async (req, res) => {
  try {
    await connectToDB();

    const allAssets = await assetsModel.find({}).sort({ _id: 1 }).exec();

    return new Response(JSON.stringify(allAssets), { status: 200 });
  } catch (error) {
    console.log(error);
  }
};

export const DELETE = async (request) => {
  const { id } = await request.json();

  console.log(id);

  try {
    await connectToDB();

    const deletedAsset = await assetsModel.findByIdAndDelete(id);

    if (!deletedAsset) {
      const response = {
        message: `Asset with id ${id} not found`,
      };
      return new Response(JSON.stringify(response), { status: 404 });
    }

    const response = {
      message: `Asset with id ${id} is deleted`,
    };
    return new Response(JSON.stringify(response), { status: 200 });
  } catch (error) {
    console.log(error);
  }
};

export const POST = async (request) => {
  const { firstName, lastName, email, status, maritalStatus, gender, startDate, updatedBy } = await request.json();

  console.log(firstName, lastName, email, status, maritalStatus, gender, startDate);
  const lastUpdate = new Date();
  const createdAt = new Date();

  try {
    await connectToDB();

    const existingAsset = await assetsModel.findOne({ email });

    if (existingAsset) {
      const response = {
        message: `Asset with email ${email} already exists`,
      };
      return new Response(JSON.stringify(response), { status: 200 });
    }

    const newAsset = new assetsModel({
      firstName,
      lastName,
      email,
      status,
      maritalStatus,
      gender,
      startDate,
      createdAt,
      lastUpdate,
      updatedBy,
    });
    mongoose.set('strictQuery', false);
    await newAsset.save();

    const response = {
      message: `Asset with email ${email} is created`,
    };
    return new Response(JSON.stringify(response), { status: 201 });
  } catch (error) {
    console.log(error);
  }
};
