import mongoose from "mongoose";

export const connect = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connection to MongoDB opened");
  } catch (err) {
    console.log(err.message);
  }
};

export const disconnect = async () => {
  try {
    await mongoose.connection.close();
    console.log("Connection to MongoDB closed");
  } catch (err) {
    console.log(err.message);
  }
};
