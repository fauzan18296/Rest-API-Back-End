import express from 'express';
import userRoutes from './routes/users.js'
import middlewareLogRequest from './middleware/logs.js'
import mysql from 'mysql2'
const app = express();

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'express_mysql',
});

app.use(middlewareLogRequest)
app.use(express.json())

app.use('/users', userRoutes)
app.use('/', (req,res) => {
  const sql = 'SELECT * FROM users'
  db.execute(sql, (rows) => {
    try{
      res.status(200).json({
        message: `connection is success!`,
        data: rows,
      })
    }catch(error) {
      console.error(`Error fetching users: ${error}`)
      res.status(500).json({
        message:`connection is failed because ${error.message}`,
        error:error
      })
    }
  }) 
})

const port = 5000;
app.listen(port, () => {
  console.log(`Server success running in ${port}`);
})