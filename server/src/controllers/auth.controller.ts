import { Request, Response } from "express";
import { matchedData, validationResult } from "express-validator";
import User from "../models/User";
import "dotenv/config";
import { comparePassword } from "../utils/compare.password";
import { generateToken } from "../utils/generate.token";
import { hashedPassword } from "../utils/hash.password";

class Auth {
  static async handleLogin(req: Request, res: Response) {
    try {
      const result = validationResult(req);

      if (!result.isEmpty()) {
        return res.status(400).json({ errors: result.array() });
      }

      const data = matchedData(req);

      const foundUser = await User.findOne({ where: { email: data.email } });
      if (!foundUser)
        return res
          .status(400)
          .json({ errors: [{ path: "email", msg: "Email not found" }] });

      const isPasswordMatch = await comparePassword(
        data.password,
        foundUser.password
      );
      if (!isPasswordMatch)
        return res.status(400).json({
          errors: [{ path: "password", msg: "Incorrect password" }],
        });

      const token = await generateToken(foundUser);

      res.cookie("token", token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 12,
        secure: false,
        sameSite: "lax",
      });

      return res.status(200).json({ message: "Success", foundUser });
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  }

  static async handleRegister(req: Request, res: Response) {
    try {
      const result = validationResult(req);

      if (!result.isEmpty()) {
        return res.status(400).json({ errors: result.array() });
      }

      const data = matchedData(req);

      const findUser = await User.findOne({ where: { email: data.email } });
      if (findUser)
        return res.status(400).json({ message: "Email already registered" });

      data.password = await hashedPassword(data.password);
      User.create(data);
      return res.status(200).json({ message: "Success" });
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  }

  static async handleLogout(req: Request, res: Response) {
    try {
      const { token } = req.cookies;
      if (!token) return res.status(400).json({ message: "No token found" });

      res.clearCookie("token", {
        httpOnly: true,
        sameSite: "lax",
        secure: false,
      });

      return res.status(200).json({ message: "Logout successfully" });
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  }
}

export default Auth;
