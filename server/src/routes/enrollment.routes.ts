import { Router } from "express";
import Enrollment from "../controllers/enrollment.controller";

const router: Router = Router();

router.post("/api/enroll-a-degree", Enrollment.enrollADegree);
router.delete("/api/unenroll-a-degree", Enrollment.unEnrollADegree);

export default router;
