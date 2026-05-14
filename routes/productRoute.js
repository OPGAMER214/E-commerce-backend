const express = require("express");
const {
    createProducts,
    getProducts,
    deleteProducts,
    updateProducts,
} = require("../controllers/productController");
const { protect, admin} = require("../middleware/authMiddleware");
const router = express.Router();
router.post("/", Protect, admin, createProducts);
router.get("/", getProducts);
router.delete("/:id", protect, admin, deleteProducts);
router.put("/:id", protect, admin, updateProducts);

module.exports = router;