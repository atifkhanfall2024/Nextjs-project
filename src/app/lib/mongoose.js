import mongoose from "mongoose";

const connectDb = async()=>{
     if (!process.env.Connection) throw new Error("Missing Connection string");

    if (mongoose.connections[0].readyState) return "Connection is already eastablished";
    await mongoose.connect(process.env.Connection)
    console.log("Data base Connection Success");
}

export default connectDb