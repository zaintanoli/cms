import connectToDB from "@/utils/db";
import purchaseordercreationModel from "@/models/purchaseordercreation";
import mongoose from "mongoose";

export const PATCH = async (request) => {
  const {
    id,
    date,
    billingShippingAddress,
    description,
    requirements,
    quantity,
    unitPrice,
    totalPrice,
    paymentTerms,
    deliveryDateTerms,
    termsConditions,
    approvals,
    timestamp,
    status,
    purchaseOrderReqId,
    purchaseOrderRequest,
    creator,
    vendor,
    updatedBy,
  } = await request.json();

  console.log(
    id,
    date,
    billingShippingAddress,
    description,
    requirements,
    quantity,
    unitPrice,
    totalPrice,
    paymentTerms,
    deliveryDateTerms,
    termsConditions,
    approvals,
    timestamp,
    status,
    purchaseOrderReqId,
    purchaseOrderRequest,
    creator,
    vendor
  );

  const lastUpdate = new Date();

  try {
    await connectToDB();

    const existingPurchaseOrderCreation = await purchaseordercreationModel.findById(id);
    if (!existingPurchaseOrderCreation) {
      const response = {
        message: `Purchase Order with id ${id} not found`,
      };
      return new Response(JSON.stringify(response), { status: 404 });
    }

    // Update fields
    existingPurchaseOrderCreation.date = date;
    existingPurchaseOrderCreation.billingShippingAddress = billingShippingAddress;
    existingPurchaseOrderCreation.description = description;
    existingPurchaseOrderCreation.requirements = requirements;
    existingPurchaseOrderCreation.quantity = quantity;
    existingPurchaseOrderCreation.unitPrice = unitPrice;
    existingPurchaseOrderCreation.totalPrice = totalPrice;
    existingPurchaseOrderCreation.paymentTerms = paymentTerms;
    existingPurchaseOrderCreation.deliveryDateTerms = deliveryDateTerms;
    existingPurchaseOrderCreation.termsConditions = termsConditions;
    existingPurchaseOrderCreation.approvals = approvals;
    existingPurchaseOrderCreation.timestamp = timestamp;
    existingPurchaseOrderCreation.status = status;
    existingPurchaseOrderCreation.purchaseOrderReqId = purchaseOrderReqId;
    existingPurchaseOrderCreation.purchaseOrderRequest = purchaseOrderRequest;
    existingPurchaseOrderCreation.creator = creator;
    existingPurchaseOrderCreation.vendor = vendor;
    existingPurchaseOrderCreation.updatedBy = updatedBy;
    existingPurchaseOrderCreation.lastUpdate = lastUpdate;

    await existingPurchaseOrderCreation.save();

    const response = {
      message: `Purchase Order with id ${id} is updated`,
    };
    return new Response(JSON.stringify(response), { status: 200 });
  } catch (error) {
    console.log(error);
    const response = {
      message: `Error updating Purchase Order`,
    };
    return new Response(JSON.stringify(response), { status: 500 });
  }
};

export const GET = async (request) => {
  try {
    await connectToDB();

    const allPurchaseOrders = await purchaseordercreationModel.find({}).sort({ _id: 1 }).exec();

    return new Response(JSON.stringify(allPurchaseOrders), { status: 200 });
  } catch (error) {
    console.log(error);
    const response = {
      message: `Error fetching Purchase Orders`,
    };
    return new Response(JSON.stringify(response), { status: 500 });
  }
};

export const DELETE = async (request) => {
  const { id } = await request.json();

  console.log(id);

  try {
    await connectToDB();

    const deletedPurchaseOrderCreation = await purchaseordercreationModel.findByIdAndDelete(id);

    if (!deletedPurchaseOrderCreation) {
      const response = {
        message: `Purchase Order with id ${id} not found`,
      };
      return new Response(JSON.stringify(response), { status: 404 });
    }

    const response = {
      message: `Purchase Order with id ${id} is deleted`,
    };
    return new Response(JSON.stringify(response), { status: 200 });
  } catch (error) {
    console.log(error);
    const response = {
      message: `Error deleting Purchase Order`,
    };
    return new Response(JSON.stringify(response), { status: 500 });
  }
};

export const POST = async (request) => {
  const {
    date,
    billingShippingAddress,
    description,
    requirements,
    quantity,
    unitPrice,
    totalPrice,
    paymentTerms,
    deliveryDateTerms,
    termsConditions,
    approvals,
    timestamp,
    status,
    purchaseOrderReqId,
    purchaseOrderRequest,
    creator,
    vendor,
    updatedBy,
  } = await request.json();

  console.log(
    date,
    billingShippingAddress,
    description,
    requirements,
    quantity,
    unitPrice,
    totalPrice,
    paymentTerms,
    deliveryDateTerms,
    termsConditions,
    approvals,
    timestamp,
    status,
    purchaseOrderReqId,
    purchaseOrderRequest,
    creator,
    vendor
  );

  const lastUpdate = new Date();
  const createdAt = new Date();

  try {
    await connectToDB();

    const existingPurchaseOrderCreation = await purchaseordercreationModel.findOne({ purchaseOrderReqId });

    if (existingPurchaseOrderCreation) {
      const response = {
        message: `Purchase Order with Purchase Order Req Id ${purchaseOrderReqId} already exists`,
      };
      return new Response(JSON.stringify(response), { status: 200 });
    }

    const newPurchaseOrderCreation = new purchaseordercreationModel({
      date,
      billingShippingAddress,
      description,
      requirements,
      quantity,
      unitPrice,
      totalPrice,
      paymentTerms,
      deliveryDateTerms,
      termsConditions,
      approvals,
      timestamp,
      status,
      purchaseOrderReqId,
      purchaseOrderRequest,
      creator,
      vendor,
      createdAt,
      lastUpdate,
      updatedBy,
    });
    mongoose.set('strictQuery', false);
    await newPurchaseOrderCreation.save();

    const response = {
      message: `Purchase Order with Purchase Order Req Id ${purchaseOrderReqId} is created`,
    };
    return new Response(JSON.stringify(response), { status: 201 });
  } catch (error) {
    console.log(error);
    const response = {
      message: `Error creating Purchase Order`,
    };
    return new Response(JSON.stringify(response), { status: 500 });
  }
};
