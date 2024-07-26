import dbpool from '../config/database.js';

const getAllUsers = () => {
  const sqlQuery = 'SELECT * FROM users';
 return dbpool.execute(sqlQuery);
}

const createNewUsers = (body) =>{
  const sqlQuery = `INSERT INTO users(name, email, address)VALUES('${body.name}', '${body.email}', '${body.address}')`;
  return dbpool.execute(sqlQuery);
}

const updateUsers = (body,id) => {
  const sqlQuery = `UPDATE users SET name='${body.name}', email='${body.email}', address='${body.address}' WHERE id=${id}`;
 return dbpool.execute(sqlQuery);
}

const deleteUsers = (id) => {
  const sqlQuery = `DELETE FROM users WHERE id='${id}'`;
  return dbpool.execute(sqlQuery);
}
export {getAllUsers, createNewUsers, updateUsers, deleteUsers};