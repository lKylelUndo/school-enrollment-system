import { body } from "express-validator";

export const registerValidationRules = [
  body("firstName").notEmpty().withMessage("First Name is required"),
  body("middleName").notEmpty().withMessage("Middle Name is required"),
  body("lastName").notEmpty().withMessage("Last Name is required"),
  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 6 })
    .withMessage("Password must be atleast 6 keys"),
  body("confirmPassword").custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error("Password does match");
    }

    return true;
  }),
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Please provide a valid email"),
];

export const loginValidationRules = [
  body("email").isEmail().withMessage("Please provide a valid email"),
  body("password").notEmpty().withMessage("Password is required"),
];
