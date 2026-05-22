const express = require("express");
const connectDB = require("./config/db");

const userRoute = require("./routes/userRoute");
const productRoutes = require("./routes/productRoute");
const orderRoutes = require("./routes/orderRoute");

// IMPORTANT: register models first
require("./models/User");
require("./models/Product");
require("./models/Order");

const app = express();

// MUST come first
app.use(express.json());

// DB connection BEFORE routes
connectDB();

// Routes
app.use("/api/users", userRoute);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

// Test route
app.get("/", (req, res) => {
    res.send("API is running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});