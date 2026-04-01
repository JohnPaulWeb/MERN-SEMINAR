 import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";

const app = express();


app.use("/api/notes", notesRoutes);

connectDB();

app.listen(5001, () => {
    console.log("Server Started on PORT: 5001");
});

