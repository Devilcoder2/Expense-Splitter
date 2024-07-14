const { User } = require("./../db/db.js");
const { Router } = require("express");

const router = Router();

router.post("/login", async (req, res) => {
  const username = req.body.username;

  const user = await User.create({
    username,
  });

  res.status(200).json({
    msg: "user created successfully",
    user,
  });
});

module.exports = router;
