const express = require('express');
const router = express.Router();
const Users = require('../users/users-model');
const bcrypt = require('bcryptjs');

router.post('/', (req, res) => {
  const newUser = req.body;

  newUser.password = bcrypt.hashSync(newUser.password, 16);

  Users.addUser(newUser)
    .then(user => {
      res.status(201).json(user);
    })
    .catch(err => {
      res.status(500).json({ error: 'Error adding user to database' });
    });
});

module.exports = router;
