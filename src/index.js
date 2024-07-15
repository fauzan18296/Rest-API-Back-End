import express from 'express';
import userRoutes from './routes/users.js';
import middlewareLogRequest from './middleware/logs.js';
import dotenv from 'dotenv';

const app = express();
dotenv.config()

app.use(middlewareLogRequest);
app.use(express.json());

app.use('/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT,() => {
  console.log(`Server is running successfully on port ${PORT}`);
});
