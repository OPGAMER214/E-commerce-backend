const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema(
    {
        user:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        orderItems: [
            {
                name: String,
                qty: Number,
                image: String,
                price: Number,
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "product"
                }
            },
        ],
        totalPrice: {
            type: Number,
            default: false
        }
    },
    { timestamps: true}
);
module.exports = mongoose.model("Order", orderSchema);
