const Order = require("../models/Order");
exports.createOrder = async (req, res) => {
    const { orderItems, totalPrice} = req.body;
    if (orderItems.length === 0) {
        return res.status(400).json({ message: "No ordered itmes"});
    }
    const order = new Order({
        user: req.user._id,
        orderItems,
        totlaPrice
    });
    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
};
exports.getMyOrders = async (req, res) => {
    const orders = await Order.find({ user: req.user._id });
    res.json(orders);
};
// GET ALL ORDERS (Admin)
exports.getAllOrders = async (req, res) => {
  const orders = await Order.find().populate("user", "name email");
  res.json(orders);
};