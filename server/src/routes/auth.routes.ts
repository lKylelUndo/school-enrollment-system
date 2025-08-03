import { Router } from "express";
import {
  loginValidationRules,
  registerValidationRules,
} from "../validations/auth.validation";
import Auth from "../controllers/auth.controller";

const router: Router = Router();

router.post("/api/login", loginValidationRules, Auth.handleLogin);
router.post("/api/register", registerValidationRules, Auth.handleRegister);

export default router;
