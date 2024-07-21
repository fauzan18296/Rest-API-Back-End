import dbpool from '../config/database.js';

const getAllUsers = () => {
  const sqlQuery = 'SELECT * FROM users';
 return dbpool.execute(sqlQuery);
}

const createNewUsers = () =>{
  const sqlQuery = `INSERT INTO users(name, email, address)VALUES('${body.name}', '${body.email}', '${body.address}')`;
  return dbpool.execute(sqlQuery);
}
export {getAllUsers, createNewUsers};