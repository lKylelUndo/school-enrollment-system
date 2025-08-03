import { body } from "express-validator";

export const addNewProgramValidationRules = [
  body("degreeName")
    .notEmpty()
    .withMessage("Degree name is required")
    .isLength({ min: 5 })
    .withMessage("Degree name is minimum of 5 characters"),
  body("degreeDescription")
    .notEmpty()
    .withMessage("Degree Description is required"),
  body("degreeDepartment")
    .notEmpty()
    .withMessage("Degree Department is required"),
];
