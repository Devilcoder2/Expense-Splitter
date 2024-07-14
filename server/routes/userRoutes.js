const { User } = require("./../db/db.js");
const { Router } = require("express");

const router = Router();

router.post("/register", (req, res) => {});

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
