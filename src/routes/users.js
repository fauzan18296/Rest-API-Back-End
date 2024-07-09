import express from 'express';
import {getAllUser, createNewUser} from '../controller/users.js'
const route = express.Router();

// Create  - Method POST
route.post('/',createNewUser)
// Read - Method Get
route.get('/', getAllUser)

export default route