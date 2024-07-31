import express from 'express';
import userRoutes from './routes/users.js';
import middlewareLogRequest from './middleware/logs.js';
import upload from './middleware/multer.js';
import 'dotenv/config';

const app = express();

app.use(middlewareLogRequest);
app.use(express.json());
app.use('/assets',express.static('public/images'))

app.use('/users', userRoutes);
app.post('/upload',upload.single('photo'), (req,res) => {
  res.json({
    message:'Upload Berhasil!'
  })
})

app.use((err,req,res,next) => {
  res.json({
    message: err.message
  })
})

const PORT = process.env.PORT || 4000;
app.listen(PORT,() => {
  console.log(`Server is running successfully on port ${PORT}!`);
});
