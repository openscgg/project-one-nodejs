const prisma = require("../../db");
const {
  findAllUsers,
  findUserById,
  insertUser,
  editUserById,
  deleteUser,
} = require("./user.repository");

const getUsers = async () => {
  const users = await findAllUsers();
  return users;
};

const getUserById = async (id) => {
  const user = await findUserById(id);
  return user;
};

module.exports = { getUsers, getUserById };
