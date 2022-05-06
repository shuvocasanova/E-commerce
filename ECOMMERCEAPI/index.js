const express = require("express");
const app = express();
const mongoose = require("mongoose");


mongoose.connect(
    "mongodb+srv://shuvo140:BzVl9i9aMCfozpjI@cluster0.bgfun.mongodb.net/ecommerce?retryWrites=true&w=majority"
).then(() => console.log("DB connection succesful")).catch((err)=>console.log(err));

app.listen(5000, () => {
    console.log("backend is running");
});
