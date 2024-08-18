const { Router } = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { User, Group, Expense } = require("./../db/db.js");
const mongoose = require("mongoose");

const JWT_SECRET = "raman";

const router = Router();

router.post("/register", async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const image = req.body.image;

  /* const userExists = await User.find({ email });

  if (userExists.length !== 0) {
    return res.status(200).json({
      msg: "User alerady exits",
    });
  } */

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
  const token = req.headers.authorization;
  const email = jwt.verify(token, JWT_SECRET);

  const user = await User.findOne({ email });

  // will remove this when added middleware
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
  const members = req.body.members;
  const token = req.headers.authorization;
  const email = jwt.verify(token, JWT_SECRET);

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
  const token = req.headers.authorization;

  const email = jwt.verify(token, JWT_SECRET);

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
  const token = req.headers.authorization;
  const email = jwt.verify(token, JWT_SECRET);

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

router.get("/groupDetails/:groupId", async (req, res) => {
  const { groupId } = req.params;

  const group = await Group.findById(groupId);
  const objectId = new mongoose.Types.ObjectId(groupId); // Convert string to ObjectId
  const expenses = await Expense.find({ groupId: objectId });

  group.expenses = expenses[0].singleExpenses;

  res.status(200).json({
    msg: "Group Found successfully",
    group,
  });
});

router.get("/groupMemberDetails", async (req, res) => {
  const groupId = req.body.groupId;

  const group = await Group.findById(groupId);

  res.status(200).json({
    msg: "Group Found successfully",
    members: group.members,
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

router.get("/allExpenses/:groupId", async (req, res) => {
  const { groupId } = req.params;

  const expenses = await Expense.findOne({ groupId });

  res.status(200).json({
    msg: "Expenses found successfully",
    expenses,
  });
});

router.post("/newExpense", async (req, res) => {
  const { groupId, description, totalAmount, splittedBy, userInExpense } =
    req.body;

  try {
    // Fetch the group by ID
    const group = await Group.findById(groupId);
    if (!group) {
      return res.status(404).json({ msg: "Group not found" });
    }
    const membersInGroup = group.members;

    // Traverse userInExpense and update owedByYou in membersInGroup
    let isSplittedByMemberInUserInExpense = false;
    userInExpense.forEach(({ userId, amountToPay }) => {
      const member = membersInGroup.find((member) => {
        isSplittedByMemberInUserInExpense =
          member.userId.toString() === splittedBy;
        return (
          member.userId.toString() === userId &&
          member.userId.toString() !== splittedBy
        );
      });
      if (member) {
        member.owedByYou += amountToPay;
      }
    });

    const splittedByMember = membersInGroup.find(
      (member) => member.userId.toString() === splittedBy
    );
    if (splittedByMember) {
      if (isSplittedByMemberInUserInExpense) {
        const minusAmount = userInExpense.find(
          ({ userId, amountToPay }) => userId === splittedBy
        );
        splittedByMember.owedToMe += totalAmount - minusAmount.amountToPay;
      } else {
        splittedByMember.owedToMe += totalAmount;
      }
    }

    const singleExpense = {
      description,
      totalAmount,
      splittedBy,
      userInExpense,
    };

    console.log(userInExpense);

    // Check if an expense document already exists for the groupId
    let expense = await Expense.findOne({ groupId });

    // If it's the first expense, create a new expense document
    if (!expense) {
      expense = new Expense({
        groupId,
        singleExpenses: [singleExpense],
      });
    } else {
      // If the document exists, add the new expense to the singleExpenses array
      expense.singleExpenses.push(singleExpense);
    }

    // Save the updated group with the new owedByYou values
    await group.save();

    // Save the expense document
    await expense.save();

    res.status(200).json({
      msg: "Expense added successfully",
      singleExpense,
    });
  } catch (error) {
    res.status(500).json({ msg: "Server error", error });
  }
});
router.get("/allUsers", async (req, res) => {
  const users = await User.find();

  res.status(200).json({
    msg: "Successful",
    users,
  });
});

module.exports = router;
