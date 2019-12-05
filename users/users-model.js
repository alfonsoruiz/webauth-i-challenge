const db = require('../data/db.config');

module.exports = {
  addUser,
  getAllUsers,
  findBy
};

function addUser(user) {
  return db('users').insert(user);
}

function getAllUsers() {
  return db('users');
}

function findBy(filter) {
  return db('users')
    .select('id', 'username')
    .where(filter);
}
