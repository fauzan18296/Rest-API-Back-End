 import { getAllUsers, createNewUsers } from "../models/users.js";
 
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
    errorGet: error
  })
}
} 

 const createNewUser = async (req,res) => {
  console.log(req.body);
  const {body} = req;
  try {
    await createNewUsers(body);
    res.json({
      message: 'CREATE new users is success!',
      data: req.body
    })
  } catch (error) {
    console.error(`Request body is Failed: ${error.message}`)
    res.status(500).json({
      message: `Insert data is not success: 
      ${error}`,
      errorReq:error
    })
  }
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
