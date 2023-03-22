import { connect, disconnect } from "@lib/mongo";
import { sendNotFound, sendOk } from "@lib/responseHelper";
import Product from "@model/Product";
import mongoose from "mongoose";
import path from "path";
import fs from "fs";

export default async function handler(req, res) {
  if (req.method === "DELETE") {
    const productId = mongoose.Types.ObjectId(req.query.id);

    try {
      await connect();
      const product = await Product.findByIdAndDelete(productId);

      // Delete the old image file if it exists
      if (product.image) {
        const imagePath = path.join("public", product.image);
        if (fs.existsSync(imagePath)) fs.unlinkSync(imagePath);
      }

      if (!product) {
        return sendNotFound(res, "Product Not Found");
      }

      await disconnect();
      return sendOk(res, "", "Product Deleted successfully");
    } catch (error) {
      return res.json(error);
    }
  }
}
