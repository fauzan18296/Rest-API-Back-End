import express from 'express';
import userRoutes from './routes/users.js';
import middlewareLogRequest from './middleware/logs.js';
import mysql from 'mysql2';

const app = express();

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "P@ssword123",
  database: "express_mysql_rest_api",
});

app.use(middlewareLogRequest);
app.use(express.json());

app.use('/users', userRoutes);

app.use('/', (req, res) => {
  pool.execute('SELECT * FROM users', (error, rows) => {
    if (error) {
      console.error(`Error fetching users: 
        ${error}`);
      res.status(500).json({
        message: `Connection failed because ${error.message}`,
        error: error
      });
    }else {
    res.status(200).json({
      message: 'Connection is successful!',
      data: rows
    });
  }
  });
});

const port = 5000;
app.listen(port,() => {
  console.log(`Server is running successfully on port ${port}`);
});
