const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

mongoose.connect("mongodb://localhost:27017/expenseSplitter");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  image: {
    type: Number,
    default: 1,
  },
  groups: [
    {
      type: Schema.Types.ObjectId,
      ref: "Group",
      default: [],
    },
  ],
  totalOwedByYou: {
    type: Number,
    default: 0,
  },
  totalOwedToMe: {
    type: Number,
    default: 0,
  },
});

const memberSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  owedByYou: {
    type: Number,
    default: 0,
  },
  owedToMe: {
    type: Number,
    default: 0,
  },
});

const groupsSchema = new Schema({
  groupName: {
    type: String,
    required: true,
  },
  admin: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  members: [memberSchema],
  expenses: [
    {
      type: Schema.Types.ObjectId,
      ref: "Expense",
      default: [],
    },
  ],
});

const userInExpenseSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  amountToPay: {
    type: Number,
    required: true,
  },
  paid: {
    type: Boolean,
    default: false,
  },
});

const singleExpensesSchema = new Schema({
  description: {
    type: String,
    required: true,
  },
  totalAmount: {
    type: Number,
    required: true,
  },
  splittedBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  dateOfSplit: {
    type: Date,
    default: Date.now,
  },
  userInExpsense: [userInExpenseSchema],
});

const expensesSchema = new Schema({
  groupId: {
    type: Schema.Types.ObjectId,
    ref: "Group",
    required: true,
  },
  singleExpenses: {
    type: [singleExpensesSchema],
    default: [],
  },
});

userSchema.pre("save", async function (next) {
  const user = this;

  if (!user.isModified("password")) {
    next();
  }

  try {
    const saltRound = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password, saltRound);
    user.password = hashedPassword;
  } catch (error) {
    next(error);
  }
});

const User = mongoose.model("User", userSchema);
const Group = mongoose.model("Group", groupsSchema);
const Expense = mongoose.model("Expense", expensesSchema);

module.exports = {
  User,
  Group,
  Expense,
};
