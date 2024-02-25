import mongoose from "mongoose";
 
const connectionDb = async (CONNNECTION_URL) => {
    try {
        await mongoose.connect(CONNNECTION_URL);
        console.log("connected to database");
    } catch (err) {
        console.log(err);
    }
}

export default connectionDb;