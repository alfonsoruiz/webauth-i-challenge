const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  if (req.session) {
    req.session.destroy(error => {
      if (error) {
        res.json({ message: 'Error logging out' });
      } else {
        res.status(200).json({ message: 'Logged out succesfully' });
      }
    });
  } else {
    res.status(200).json({ message: 'You are not logged in' });
  }
});

module.exports = router;
