import { connect, disconnect } from "@lib/mongo";
import { sendBadRequest, sendOk } from "@lib/responseHelper";
import Product from "@model/Product";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      await connect();
      const products = await Product.find();
      await disconnect();
      return sendOk(res, products);
    } catch (error) {
      console.error(error.message);
      return sendBadRequest(res, 500, error.message);
    }
  }

  return sendInternalServerError(res);
}
