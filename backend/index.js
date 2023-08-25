import express from 'express';
import dotenv from 'dotenv';
import server from './src/routes/serverRoute.js';
import paymentRoute from './src/routes/paymentRoutes.js'
import conductor from './src/routes/conductorRoutes.js'
import { initDBConnection } from './src/data/dbConnection.js';
import login from './src/routes/loginRoute.js';
import registerUser from './src/routes/registerRoute.js';
import emailVerification from './src/routes/registerRoute.js';

import cors from 'cors';

dotenv.config();
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3001;

const FRONTEND_URL = process.env.FRONTEND_URL;

app.use( 
  cors({
    credentials: true,
    origin: FRONTEND_URL,
  })
);

app.use('/', server);
app.use('/conductor', conductor);
app.use('/', login);
app.use('/', registerUser);
app.use('/', emailVerification);
app.use('/payment', paymentRoute );


app.listen(PORT, () => {
  initDBConnection();
  console.log(`Linstening on port ${PORT}`);
});
