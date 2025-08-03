import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { matchedData, validationResult } from "express-validator";
import User from "../models/User";
import "dotenv/config";

type UserTypes = {
  id: number | null;
  email: string | null;
  password: string | null;
};

class Auth {
  static async handleLogin(req: Request, res: Response) {
    try {
      const result = validationResult(req);

      if (!result.isEmpty()) {
        return res.status(400).json({ errors: result.array() });
      }

      const data = matchedData(req);
      // console.log(data);

      const foundUser = await User.findOne({ where: { email: data.email } });
      if (!foundUser) return res.status(400).json({ message: "No user found" });

      const isPasswordMatch = await bcrypt.compare(
        data.password,
        foundUser.password
      );
      if (!isPasswordMatch)
        return res.status(400).json({ message: "Incorrect password" });

      const token = jwt.sign(
        { foundUser },
        process.env.ACCESS_TOKEN_KEY as string,
        {
          expiresIn: "1d",
        }
      );

      console.log(token);

      res.cookie("token", token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 12,
        secure: false,
        sameSite: "none",
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
      console.table([data]);

      data.password = await bcrypt.hash(data.password, 10);

      User.create(data);

      return res.status(200).json({ message: "Succes" });
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  }
}

export default Auth;

// export const handleLogin = async (req: Request, res: Response) => {
//   try {
//     const result = validationResult(req);

//     if (!result.isEmpty()) {
//       return res.status(400).json({ errors: result.array() });
//     }

//     const data = matchedData(req);
//     console.log(data);

//     const user = await User.findOne({ where: { email: data.email } });
//     console.log(user);
//     if (!user) return res.status(400).json({ message: "No user found" });
//     // if (!(bcry))

//     // const token = jwt.sign({data}, "")
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json(error);
//   }
// };

// export const handleRegister = (req: Request, res: Response) => {
//   try {
//     const result = validationResult(req);

//     if (!result.isEmpty()) {
//       return res.status(400).json({ errors: result.array() });
//     }

//     const data = matchedData(req);
//     console.table([data]);

//     User.create(data);

//     return res.status(200).json({ message: "Succes" });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json(error);
//   }
// };
