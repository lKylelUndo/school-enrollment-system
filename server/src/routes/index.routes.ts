import { Router } from "express";
import authRoutes from "./auth.routes";
import degreeProgramRoutes from "./degreeProgram.routes";
import enrollmentRoutes from "./enrollment.routes";

const router: Router = Router();
router.use(authRoutes);
router.use(degreeProgramRoutes);
router.use(enrollmentRoutes);

export default router;
