const express = require("express");
const mongoose = require("mongoose");
const profileRoute = require("./routers/profileRoute");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use("/profiles", profileRoute);

const port = process.env.PORT || 5000;

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch((error) => console.log("MongoDB connection error: ", error));


app.listen(port, ()=>{
    console.log(`Server is running on port http://localhost:${port}`);
});