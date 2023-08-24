import 'dotenv/config'
import mongoose from "mongoose";
import express from 'express';
import subscribersRouter from "./routes/subscribers.js";

const PORT = 3000;
const app = express();

const DB_NAME = 'new_database';
const COLLECTION_NAME = 'test_collection';

//mongoose.connect("mongodb://localhost:27017/");
mongoose.connect(process.env.MONGO_URL, {
    user: "root",
    pass: "example",
});

const db = mongoose.connection;
db.on("error", (error) => console.log(error) )
db.once("open", () => console.log("Connected to database") )

app.use(express.json());

app.use('/subscribers', subscribersRouter)

app.listen(PORT, () => {
    console.log("Server has started!");
});

