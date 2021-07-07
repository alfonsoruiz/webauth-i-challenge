const express = require('express');
const router = express.Router();
const Users = require('../users/users-model');
const bcrypt = require('bcryptjs');

router.post('/', (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        req.session.user = user; // attaches a user to the session upon successful login
        res.status(200).json({ message: `Logged In` });
      } else {
        res.status(401).json({ message: 'Invalid Credentials' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});
module.exports = router;
