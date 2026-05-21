const mongoose = require("mongoose");
const connectDB = async () => {
    try {
        await
        mongoose.connect("mongodb+srv://OPGAMER:Panther214@opgamercluster.ybmx7nv.mongodb.net/?appName=OPGAMERCLUSTER");
        console.log("MongoDB Connected");
        
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};
module.exports = connectDB;