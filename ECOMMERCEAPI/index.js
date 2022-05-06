const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const usersRoute = require("./routes/user")
const authRoute = require("./routes/auth");
const productsRoute = require("./routes/product");
const cartsRoute = require("./routes/cart");
const ordersRoute = require("./routes/order");

dotenv.config()


mongoose.connect(
    process.env.MONGO_URL
).then(() => console.log("DB connection succesful")).catch((err)=>console.log(err));

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/products", productsRoute);
app.use("/api/carts", cartsRoute);
app.use("/api/orders", ordersRoute);

app.listen(process.env.PORT_NUMBER || 5000, () => {
    console.log("backend is running");
});
