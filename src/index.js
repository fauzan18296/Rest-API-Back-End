import express from 'express';
import userRoutes from './routes/users.js'
import middlewareLogRequest from './middleware/logs.js'
const app = express();

app.use(middlewareLogRequest)
app.use(express.json())

app.use('/users', userRoutes)

const port = 5000;
app.listen(port, () => {
  console.log(`Server success running in ${port}`);
})