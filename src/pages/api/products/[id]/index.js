import { connect, disconnect } from "@lib/mongo";
import { sendOk, sendInternalServerError } from "@lib/responseHelper";
import Product from "@model/Product";
import mongoose from "mongoose";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      await connect();
      const { id } = req.query;
      const productId = mongoose.Types.ObjectId(id);
      const product = await Product.findOne({ _id: productId });
      await disconnect();

      if (!product)
        return sendInternalServerError(res, 404, "Product not found");
      return sendOk(res, product);
    } catch (error) {
      console.error(error);
      return sendInternalServerError(res, 500, error.message);
    }
  }
  return sendInternalServerError(res);
}
