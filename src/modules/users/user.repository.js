const prisma = require("../../db");

const findAllUsers = async () => {
  const users = await prisma.user.findMany();
  return users;
};

const findUserById = async (id) => {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });
  return user;
};

const insertUser = async (userData) => {
  const user = await prisma.user.create({
    data: {
      email: userData.email,
      name: userData.name,
    },
  });
  return user;
};

const editUserById = async (id, userData) => {
  const user = await prisma.user.update({
    where: {
      id,
    },
    data: {
      ...userData,
    },
  });
};

const deleteUser = async (id) => {
  const user = await prisma.user.delete({
    where: {
      id,
    },
  });
};

module.exports = {
  findAllUsers,
  findUserById,
  insertUser,
  editUserById,
  deleteUser,
};
