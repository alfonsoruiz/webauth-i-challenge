const express = require('express');
const server = express();

const RegistrationRouter = require('./registration/registration-router');
const LoginRouter = require('./login/login-router');
const UsersRouter = require('./users/users-router');

server.use(express.json());

server.use('/api/register', RegistrationRouter);
server.use('/api/login', LoginRouter);
server.use('/api/users', UsersRouter);

module.exports = server;
