import dbpool from '../config/database.js';

const getAllUsers = () => {
  const sqlQuery = 'SELECT * FROM users';
 return dbpool.execute(sqlQuery);
}
export {getAllUsers};