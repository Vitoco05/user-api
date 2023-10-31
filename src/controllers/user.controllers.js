const catchError = require('../utils/catchError.js');
const User = require('../models/User.js');

const getAllUsers = catchError(async(req, res) => {
  const user = await User.findAll();
  return res.json(user);
});

const createUser = catchError(async(req, res) => {
  const { first_name, last_name, email, password, birthday } = req.body;
  const user = await User.create({
    first_name,
    last_name,
    email,
    password,
    birthday
  });
  return res.status(201).json(user);
});

const getOneUser = catchError(async(req, res) => {
  const { id } = req.params;
  const user = await User.findByPk(id);
  return res.status(201).json(user);
});

const updateUser = catchError(async(req, res) => {
  const { id } = req.params;
  const { first_name, last_name, email, password, birthday } = req.body;
  const user = await User.update(
    { first_name, last_name, email, password, birthday },
    { where: {id}, returning: true}
  );
  return res.status(201).json(user);
});

const deleteUser = catchError(async(req, res) => {
  const { id } = req.params;
  const user = await User.destroy({ where: {id} });
  return res.json(user[1][0]);
});

module.exports = {
  getAllUsers,
  createUser,
  getOneUser,
  updateUser,
  deleteUser
}

