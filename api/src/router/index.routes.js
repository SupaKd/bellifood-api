import { Router } from "express";

import authRoutes from "./auth.routes.js";
import userRoutes from "./user.routes.js";
import verifyToken from "../middlewares/verifyToken.js";

const router = Router();

router.use("/auth", authRoutes);
router.use("/user", verifyToken, userRoutes);

export default router;