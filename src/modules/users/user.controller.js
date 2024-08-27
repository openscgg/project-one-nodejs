const express = require("express");
const { getUsers, getUserById } = require("./user.service");
const { user } = require("../../db");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const users = await getUsers();
    res.status(200).send(users);
  } catch (err) {
    res.status(400).send("users not found");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    const user = getUserById(userId);
    res.status(200).send(user);
  } catch (err) {
    res.status(400).send("cannot find user");
  }
});

router.post("/", async (req, res) => {
  try {
    const userData = req.body;
    const user = cre;
  } catch (err) {}
});
