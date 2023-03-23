import { connect, disconnect } from "@lib/mongo";
import { sendBadRequest, sendOk } from "@lib/responseHelper";
import User from "@model/User";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      await connect();
      const users = await User.find();
      await disconnect();
      return sendOk(res, users);
    } catch (error) {
      console.error(error);
      return sendBadRequest(res, 500, error);
    }
  }

  return sendInternalServerError(res);
}
