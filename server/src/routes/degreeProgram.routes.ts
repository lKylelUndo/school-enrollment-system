import { Router } from "express";
import DegreeProgram from "../controllers/degreeProgram.controller";
import { verifyToken } from "../middlewares/verify.token";
import { addNewProgramValidationRules } from "../validations/degreePrograms.validation";

const router: Router = Router();

router.get("/api/view-a-program/:id", DegreeProgram.viewAProgram);
router.get("/api/view-all-programs", DegreeProgram.getAllProgram);
router.post(
  "/api/add-new-program",
  addNewProgramValidationRules,
  DegreeProgram.addNewProgram
);
router.put(
  "/api/update-program/:id",

  DegreeProgram.updateAProgram
);
router.delete(
  "/api/delete-a-program/:id",

  DegreeProgram.deleteAProgram
);

export default router;
