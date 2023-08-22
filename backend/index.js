import express from 'express';
import dotenv from 'dotenv';
import server from './src/routes/serverRoute.js';
import paymentRoute from './src/routes/paymentRoute.js'
import { initDBConnection } from './src/data/dbConnection.js';


dotenv.config();
const app = express();
app.use(express.json()); 

const PORT = process.env.PORT || 3001;

app.use('/', server);

app.use('/payment', paymentRoute );
app.listen(PORT , ()=>{
    initDBConnection();
    console.log(`Linstening on port ${PORT}`);
}); 