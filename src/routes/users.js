import express from 'express';
import {getAllUser, createNewUser, updateUser, deleteUser} from '../controller/users.js'
const route = express.Router();

// Create  - Method POST
route.post('/',createNewUser)
// Read - Method Get
route.get('/', getAllUser)
// Update data tanpa mengubah semua datanya - Method Patch
route.patch('/:id', updateUser)
// Delete - Method Delete
route.delete('/:id', deleteUser)
export default route