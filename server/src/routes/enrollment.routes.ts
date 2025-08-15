import { Router } from "express";
import Enrollment from "../controllers/enrollment.controller";

const router: Router = Router();

router.get("/api/get-enrollment-status/:userId", Enrollment.getEnrollmentStatus)
router.post("/api/enroll-a-degree", Enrollment.enrollADegree);
router.delete("/api/unenroll-a-degree/:userId", Enrollment.unEnrollADegree);

export default router;
