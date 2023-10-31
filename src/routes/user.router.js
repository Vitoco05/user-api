const express = require('express');
const { getAllUsers, createUser, getOneUser, updateUser, deleteUser } = require('../controllers/user.controllers.js');

const userRouter = express.Router();

userRouter.route('/')
  .get(getAllUsers)
  .post(createUser)

userRouter.route('/:id')
  .get(getOneUser)
  .put(updateUser)
  .delete(deleteUser)

module.exports = userRouter;