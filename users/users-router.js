const express = require('express');
const router = express.Router();
const Users = require('./users-model');

router.get('/', (req, res) => {
  Users.getAllUsers()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      res.status(500).json({ error: 'Error retrieving projects from db' });
    });
});

module.exports = router;
