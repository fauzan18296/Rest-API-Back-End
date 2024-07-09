 const getAllUser = (req,res) =>{
  res.json({
    message: 'GET all users is success!',
  })
} 
 const createNewUser = (req,res) => {
  console.log(req.body)
  res.json({
    message: 'CREATE new users is success!',
    data: req.body
  })
}
export {getAllUser, createNewUser}
