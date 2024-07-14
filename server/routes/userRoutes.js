const { Router } = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { User } = require("./../db/db.js");

const JWT_SECRET = "raman";

const router = Router();

router.post("/register", async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const image = req.body.image;

  const userExists = await User.find({ email });

  if (userExists.length !== 0) {
    return res.status(200).json({
      msg: "User alerady exits",
    });
  }

  const user = await User.create({
    name,
    email,
    password,
    image,
  });

  res.status(200).json({
    msg: "Account created successfully",
    user,
  });
});

router.post("/login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const user = await User.findOne({
    email,
  });

  if (!user) {
    return res.status(403).json({
      msg: "Wrong username or password",
    });
  }

  const hashedPassword = await bcrypt.compare(password, user.password);

  if (!hashedPassword) {
    return res.status(403).json({
      msg: "Wrong username or password",
    });
  }

  if (user.email) {
    const token = jwt.sign(email, JWT_SECRET);
    res.status(200).json({
      msg: "User Login Successfull",
      token,
    });
  }
});

router.get("/allGroupsDebts", (req, res) => {});

router.post("/newGroup", (req, res) => {});

router.get("/myProfile", (req, res) => {});

router.get("/allGroups", (req, res) => {});

router.get("/groupDetails", (req, res) => {});

router.get("/singleGroupDebts", (req, res) => {});

router.get("/allExpenses", (req, res) => {});

router.post("/newExpense", (req, res) => {});

module.exports = router;
