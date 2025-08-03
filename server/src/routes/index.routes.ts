import { Router } from "express";
import authRoutes from "./auth.routes";
import degreeProgramRoutes from "./degreeProgram.routes"

const router: Router = Router();
router.use(authRoutes);
router.use(degreeProgramRoutes);

export default router;
