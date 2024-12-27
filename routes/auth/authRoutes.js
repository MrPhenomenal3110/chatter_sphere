import express from "express";
const router = express.Router();
import { register, login } from "../../services/authService.js";

// REGISTER
router.post("/register", async (req, res) => {
  try {
    await register();
  } catch (err) {
    console.error("Error in register route: ", err);
    return res
      .status(500)
      .send({ success: false, error: "Error in register route" });
  }
  return res.status(200).send("Register route");
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    await login();
  } catch (err) {
    console.error("Error in login route: ", err);
    return res
      .status(500)
      .send({ success: false, error: "Error in login route" });
  }
  return res.status(200).send("Login route");
});

export default router;
