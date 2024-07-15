 import { getAllUsers } from "../models/users.js";
 
 const getAllUser = async (req,res) =>{
  try{
  const [data] = await getAllUsers();
  res.json({
    message: 'GET all users is success!',
    data: data
  })
}catch(error) {
  console.error(`fetching users is failed: ${error.message}`)
  res.status(500).json({
    message: `server is error!`,
    error: error
  })
}
} 

 const createNewUser = (req,res) => {
  console.log(req.body)
  res.json({
    message: 'CREATE new users is success!',
    data: req.body
  })
}

const updateUser = (req,res) => {
  const {id} = req.params;
  console.log('id:', id);
  res.json({
    message: 'UPDATE user is success!',
    data: req.body
  })
}

const deleteUser = (req, res) => {
  const {id} = req.params;
  res.json({
    message: 'DELETE user is success!',
    data: {
      id: id,
      name: 'Ahmad Fauzan',
      email: 'fauzan18296@gmail.com',
      address: 'Surabaya',
    }
  })
}
export {getAllUser, createNewUser, updateUser, deleteUser}
