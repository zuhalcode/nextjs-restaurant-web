import { connect, disconnect } from "@lib/mongo";
import { sendOk } from "@lib/responseHelper";
import Order from "@model/Order";
import mongoose from "mongoose";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const orderId = mongoose.Types.ObjectId(req.query.orderId);

    try {
      await connect();
      const order = await Order.findById(orderId);
      await disconnect();
      return sendOk(res, order);
    } catch (error) {
      return res.json(error);
    }
  }
}
