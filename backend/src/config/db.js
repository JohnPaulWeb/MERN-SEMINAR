import mongoose from "mongoose";

export const connectDB = async () => {
    try {
       await mongoose.connect("mongodb+srv://isseiyudo594_db_user:dWLdSQFPCJm1Zh0O@cluster0.5uujm5t.mongodb.net/?appName=Cluster0")
       console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

