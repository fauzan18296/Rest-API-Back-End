 const getAllUser = (req,res) =>{
  const data = {
    id: '1',
    name:'Ahmad Fauzan',
    email: 'fauzan18296@gmail.com',
    addres: 'Surabaya'
  }
  res.json({
    message: 'GET all users is success!',
    data: data
  })
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
