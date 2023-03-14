import { connect, disconnect } from "@lib/mongo";
import { sendOk } from "@lib/responseHelper";
import Order from "@model/Order";
import mongoose from "mongoose";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const userId = mongoose.Types.ObjectId(req.body.userId);

    try {
      if (userId) {
        await connect();
        const order = await Order.find({ user: userId });
        await disconnect();
        return sendOk(res, order);
      }
    } catch (error) {
      return res.json(error);
    }
  }
}
