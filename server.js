import express from 'express';
import 'dotenv/config';
import cors from 'cors';

import setViewEngine from './src/config/setViewEngine.js';
import setRoutes from './src/routes/index.js';
import connectDB from './src/config/connectMongoose.js';

const app = express();
const port = process.env.PORT || 8888;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

setViewEngine(app);
setRoutes(app);

connectDB();

app.listen(port, () => {
   console.log(`Server running on port ${port}`);
});
