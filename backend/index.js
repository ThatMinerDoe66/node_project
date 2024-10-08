const express = require("express");
const mongoose = require("mongoose");
const profileRoute = require("./routers/profileRoute");
require("dotenv").config();

const app = express();

const cors = require('cors');
app.use(cors());

app.use(express.json());
app.use("/profiles", profileRoute);

const port = process.env.PORT || 5000;

mongoose
    .connect("mongodb+srv://joaquingabrielcamangeg6:d863ZpS8ywoAhKpI@cluster0.yihls.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => console.log("MongoDB connected"))
    .catch((error) => console.log("MongoDB connection error: ", error));


app.listen(port, ()=>{
    console.log(`Server is running on port http://localhost:${port}`);
});