import express from 'express';
import dotenv from 'dotenv';
import server from './src/routes/serverRoute.js';
import { initDBConnection } from './src/data/dbConnection.js';
import login from './src/routes/loginRoute.js';

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3001;

app.use('/', server);
app.use(express.json());
app.use(login);

app.listen(PORT, () => {
  initDBConnection();
  console.log(`Linstening on port ${PORT}`);
});
