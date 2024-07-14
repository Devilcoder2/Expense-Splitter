const { Router } = require("express");
const { User } = require("./../db/db.js");

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

router.post("/login", (req, res) => {});

router.get("/allGroupsDebts", (req, res) => {});

router.post("/newGroup", (req, res) => {});

router.get("/myProfile", (req, res) => {});

router.get("/allGroups", (req, res) => {});

router.get("/groupDetails", (req, res) => {});

router.get("/singleGroupDebts", (req, res) => {});

router.get("/allExpenses", (req, res) => {});

router.post("/newExpense", (req, res) => {});

module.exports = router;
