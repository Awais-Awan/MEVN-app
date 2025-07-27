import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import cors from 'cors';
import productRoutes from './routes/productRoutes.js';

import authRouter from "./routes/auth.js";


dotenv.config();
connectDB();


const app = express();
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());
app.use('/api/products', productRoutes);
app.use('/', authRouter);


app.get('/', (req, res)=>{
    res.send("API is running...");
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
console.log(`server is running on http://localhost:${PORT}`)
});