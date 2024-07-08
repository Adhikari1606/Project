import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.PASSWORD;
const connect = async () => {
    const url = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.qsnvxrk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    try{
        await mongoose.connect(url);
        console.log('Connected to database successfully');
        
    }
    catch(e){
        console.log('Error while connecting to database:',e);
    }
}

export default connect;
