const { Router } = require("express");
const router = Router();

const ctrEmail = require("../controllers/email.controller");

router.post("/send-me", ctrEmail.sendMeEmail);

module.exports = router;
