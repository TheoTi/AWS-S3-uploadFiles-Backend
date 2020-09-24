import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import 'dotenv/config';

import { router } from './routes';

const { DATABASE, DB_USER, DB_PASSWORD } = process.env;

const app = express();

/**
 * Database connection
 */

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@uploadfile.rnxo6.mongodb.net/${DATABASE}?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("📦️ Successfuly connected to the MongoDb"))
  .catch(() => console.log("🚩️ Connection to the database failed"));

app.use(express.json());
app.use(morgan('dev'));
app.use(router);

export { app };
