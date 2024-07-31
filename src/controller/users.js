 import { getAllUsers, createNewUsers, updateUsers, deleteUsers } from "../models/users.js";
 
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
  const bodyRequest = req.body;
  if(!bodyRequest.email || !bodyRequest.name || !bodyRequest.address) {
    return res.status(400).json({
      message: "Anda memasukkan data yang salah!",
      data: null
    })
  }
  try {
    await createNewUsers(bodyRequest);
    res.status(201).json({
      message: 'CREATE new users is success!',
      data: bodyRequest
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

const updateUser = async (req,res) => {
  const {id} = req.params;
  const {body} = req;
  try{
  await updateUsers(body,id);
    res.json({
      message: 'UPDATE user is success!',
      data: {
        id: id,
        ...body
      }
    })
  }catch(error){
    console.error(`Update request is failed: 
      ${error.message}`)
      res.status(500).json({
        message: 'Update request is rejected!',
        errorUpdate: error
      })
      console.log('id:', id);
  }
  
}

const deleteUser = async (req, res) => {
  const {id} = req.params;
  try{
   await deleteUsers(id);
    res.json({
      message: 'DELETE user is success!',
      data:null
    })
  }catch(error) {
    console.error(`Cannot delete the data: ${error.message}`)
    res.status(500).json({
      message: 'Delete is rejected!',
      errorDelete:error
    })
  }
}
export {getAllUser, createNewUser, updateUser, deleteUser}
