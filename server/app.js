const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/userRoutes.js");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/user", userRouter);

app.listen(3000, () => {
  console.log("Listening on the port 3000...");
});
