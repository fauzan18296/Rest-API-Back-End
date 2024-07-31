import multer from 'multer';
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null,'public/images')
  },
  filename: (req, file, callback) => {
    const timeStamp = new Date().getTime();
    console.log(file)
    const originalname = file.originalname;
    // const extension = path.extname(file.originalname);
    callback(null, `${timeStamp}-${originalname}`);
  }
 });
const uploud = multer({
  storage: storage,
  limits: {
    fileSize: 2 * 1000 * 1000 //3 MB
  }
});
export default uploud;