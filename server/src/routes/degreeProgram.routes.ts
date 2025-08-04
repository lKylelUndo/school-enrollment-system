import { Router } from "express";
import DegreeProgramController from "../controllers/degreeProgram.controller";
import { verifyToken } from "../middlewares/verify.token";
import { addNewProgramValidationRules } from "../validations/degreePrograms.validation";

const router: Router = Router();

router.get("/api/view-a-program/:id", DegreeProgramController.viewAProgram);
router.get("/api/view-all-programs", DegreeProgramController.getAllProgram);
router.post(
  "/api/add-new-program",
  addNewProgramValidationRules,
  DegreeProgramController.addNewProgram
);
router.put(
  "/api/update-program/:id",

  DegreeProgramController.updateAProgram
);
router.delete(
  "/api/delete-a-program/:id",

  DegreeProgramController.deleteAProgram
);

export default router;
