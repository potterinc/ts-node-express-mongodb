import { configDotenv } from 'dotenv';
import express, { Application, Request, Response, NextFunction } from 'express';

if (process.env.NODE_ENV !== 'production')
    configDotenv();

const app: Application = express();
const PORT=process.env.PORT || 5000;

app.get('/', (req: Request, res: Response, next: NextFunction)=>{
    res.send('Hello, World');
})

app.listen(PORT, ()=> console.log(`server running on port: ${PORT}`));