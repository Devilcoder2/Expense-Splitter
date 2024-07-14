const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/expenseSplitter");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  groups: [
    {
      type: Schema.Types.ObjectId,
      ref: "Group",
    },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = {
  User,
};
