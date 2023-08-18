import express from 'express';
import dotenv from 'dotenv';
import server from './src/controller/serverController.js';
import { initDBConnection } from './src/data/dbConnection.js';


dotenv.config();
const app = express();


const PORT = process.env.PORT || 3001;

app.use('/', server);

app.listen(PORT , ()=>{
    initDBConnection();
    console.log(`Linstening on port ${PORT}`);
}); 