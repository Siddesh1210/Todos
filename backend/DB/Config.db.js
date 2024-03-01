import mongoose from "mongoose";
function dbConfig()
{
    mongoose.connect(`${process.env.DB_URI}/${process.env.DB_Name}`)
    .then(()=>{
        console.log("DB connected successfully");
    })
    .catch((err)=>{
        console.log("Error is :"+err);
    })
}

export default dbConfig;