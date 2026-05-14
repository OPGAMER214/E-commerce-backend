const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.protect = async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorzation.startWith("Bearer")) {
        token = req.headers.authorization.split(" ")[1];
        try {
            const decoded = jwt.verify(token, "secretkey");
            req.user = await User.findById(decoded.id).select("password");
            next();
        } catch (error) {
            res.status(401).json({ message: "Not authorized" });
        }
    } else {
        res.status(401).json({ message: "No token"});
    }
};

exports.admin = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
        next();
    } else {
        res.status(401).json({ message: "Admin only"});
    }
};