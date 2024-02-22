import { configDotenv } from "dotenv";
configDotenv(); 

const MONGODB_URI = process.env.MONGODB_URI || '';

export const config = {
    mongo:{url: MONGODB_URI}
}