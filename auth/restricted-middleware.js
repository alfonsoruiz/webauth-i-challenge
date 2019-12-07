const bcrypt = require('bcryptjs');
const Users = require('../users/users-model');

module.exports = function restricted(req, res, next) {
  // Password does not belong in headers in a production application
  const { username, password } = req.headers;
  console.log(username);

  if (username && password) {
    // Queries DB for username from req.headers in the form of a key value pair instead of just the value of the username
    Users.findBy({ username })
      .first()
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
          next();
        } else {
          res.status(401).json({ message: 'Invalid Credentials' });
        }
      })
      .catch(err => {
        res.status(500).json({ message: 'Unexpected error' });
      });
  } else {
    res.status(400).json({ message: 'Pleas provide username and password' });
  }
};
