const express = require('express');
const helmet = require('helmet');
const session = require('express-session');

const RegistrationRouter = require('./registration/registration-router');
const LoginRouter = require('./login/login-router');
const LogoutRouter = require('./logout/logout-router');
const UsersRouter = require('./users/users-router');

const server = express();

// Configuration object for the session
const sessionConfig = {
  name: 'moncookie', // Changes default name of sid from cookie
  secret: 'keep it secret, keep it safe!', // Encrypts and decrypts cookie
  cookie: {
    maxAge: 1000 * 30, // Length of time the cookie exist before expiration
    secure: false, // True in production only, allows running on http instead of https only
    httpOnly: true // JS cannot access the cookie only the http protocol
  },
  resave: false, // If session has not changed don't re-create
  saveUninitialized: false // GDPR laws against setting cookies automatically
};

server.use(express.json());
server.use(helmet());
server.use(session(sessionConfig));

server.use('/api/register', RegistrationRouter);
server.use('/api/login', LoginRouter);
server.use('/api/logout', LogoutRouter);
server.use('/api/users', UsersRouter);

module.exports = server;
