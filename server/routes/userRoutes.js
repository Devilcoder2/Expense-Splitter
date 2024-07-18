const { Router } = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { User, Group, Expense } = require("./../db/db.js");

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

router.get("/allGroupsDebts", async (req, res) => {
  const email = req.body.email;

  const user = await User.findOne({ email });

  //will remove this when added middleware
  if (!user) {
    return res.status(400).json({
      msg: "Email not found",
    });
  }

  const owedByYou = user.totalOwedByYou;
  const owedToMe = user.totalOwedToMe;

  res.status(200).json({
    msg: "Successfully found all debts",
    owedByYou,
    owedToMe,
  });
});

router.post("/newGroup", async (req, res) => {
  const groupName = req.body.groupName;
  const email = req.body.email;
  const members = req.body.members;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).json({
      msg: "User not found",
    });
  }

  const admin = user._id;

  const allMembers = [...members, { userId: admin }];

  const group = await Group.create({
    groupName,
    admin,
    members: allMembers,
  });

  const groupId = group._id;

  await Promise.all(
    allMembers.map(async (member) => {
      await User.findByIdAndUpdate(
        member.userId,
        { $push: { groups: groupId } },
        { new: true, useFindAndModify: false }
      );
    })
  );

  await Expense.create({ groupId });

  res.status(200).json({
    msg: "Group Created Successfully",
    group,
  });
});

router.get("/myProfile", async (req, res) => {
  const email = req.body.email;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).json({
      msg: "User not found",
    });
  }

  res.status(200).json({
    msg: "Successfully fond the user",
    user,
  });
});

router.get("/allGroups", async (req, res) => {
  const email = req.body.email;

  const user = await User.findOne({
    email,
  });

  if (!user) {
    return res.status(400).json({
      msg: "User not found",
    });
  }

  const groupIds = user.groups;

  const groupDetails = await Group.find({
    _id: { $in: groupIds },
  });

  res.status(200).json({
    msg: "All groups details foudn successfully",
    groupDetails,
  });
});

router.get("/groupDetails", async (req, res) => {
  const groupId = req.body.groupId;

  const group = await Group.findById(groupId);

  res.status(200).json({
    msg: "Group Found successfully",
    group,
  });
});

router.get("/singleGroupDebts", async (req, res) => {
  const groupId = req.body.groupId;
  const email = req.body.email;

  const group = await Group.findById(groupId);
  const members = group.members;

  const user = await User.findOne({ email });

  const filteredUser = members.filter((member) => {
    return member.userId.toString() === user._id.toString();
  });

  res.status(200).json({
    msg: "Debt found successfully",
    filteredUser,
  });
});

router.get("/allExpenses", async (req, res) => {
  const groupId = req.body.groupId;

  const expenses = await Expense.findOne({ groupId });

  res.status(200).json({
    msg: "Expenses found successfully",
    expenses,
  });
});

router.post("/newExpense", (req, res) => {});

module.exports = router;
