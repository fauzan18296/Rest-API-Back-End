import express from 'express';
import userRoutes from './routes/users.js';
import middlewareLogRequest from './middleware/logs.js';
import 'dotenv/config';

const app = express();

app.use(middlewareLogRequest);
app.use(express.json());

app.use('/users', userRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT,() => {
  console.log(`Server is running successfully on port ${PORT}!`);
});
