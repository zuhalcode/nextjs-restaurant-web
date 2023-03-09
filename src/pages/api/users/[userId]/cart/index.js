import { connect, disconnect } from "@lib/mongo";
import { sendOk } from "@lib/responseHelper";
import Cart from "@model/Cart";
import mongoose from "mongoose";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      await connect();
      const userId = mongoose.Types.ObjectId(req.query.userId);
      const cart = await Cart.findOne({ user: userId });
      await disconnect();
      return sendOk(res, cart);
    } catch (error) {
      return res.json(error);
    }
  }
}
