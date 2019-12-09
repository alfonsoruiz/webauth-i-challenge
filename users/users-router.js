const express = require('express');
const restricted = require('../auth/restricted-middleware');
const router = express.Router();
const Users = require('./users-model');

/******************* Authorization ********************
  - If Route needs to be protected the following is necessary
  - req.headers should have a correct username/password
  - req.headers.username, req.headers.password
  - If incorrect block user
*/

// Upon get request to this end point runs restricted middleware to authenticate user before sending resonposnes back to the client
router.get('/', restricted, (req, res) => {
  Users.getAllUsers()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      res.status(500).json({ error: 'Error retrieving projects from db' });
    });
});

module.exports = router;
