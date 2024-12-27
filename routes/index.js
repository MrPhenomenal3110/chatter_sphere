import express from "express";
const router = express.Router();

import authRoutes from "./auth/authRoutes.js";

router.use("/auth", authRoutes);

export default router;
