module.exports = function restricted(req, res, next) {
  // Checks if session and user on session exist
  if (req.session && req.session.user) {
    // Runs next middlware function
    next();
  } else {
    res.status(401).json({ message: 'You shall not pass!' });
  }
};
