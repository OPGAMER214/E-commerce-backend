const express = require("express");
const connectDB = require("./config/db");
const userRoute = require("./routes/userRoute");
const productRoutes = require("./routes/productRoute");
const orderRoutes = require("./routes/orderRoute");

const app = express();

app.use("/api/products", productRoutes);
connectDB();
app.use("/api/users", userRoute);
app.use("/api/orders", orderRoutes);
app.use(express.json());
app.get("/", (req, res) => {
    res.send("API is running...");
});
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    
});