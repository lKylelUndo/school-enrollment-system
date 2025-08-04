import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";

interface JWTPayload {
  id: number;
  firstName: string;
  middleName: string;
  lastName: string;
}

// this is called module augmentation
// declare module "express-serve-static-core" {
//   interface Request {
//     currentUser?: JWTPayload;
//   }
// }

// declare global {
//   namespace Express {
//     interface Request {
//       currentUser?: JWTPayload;
//     }
//   }
// }

export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.cookies.token;
    if (!token)
      return res.status(401).json({ message: "Unauthorized: No token found" });
    console.log("inside verify", token);

    jwt.verify(
      token,
      process.env.ACCESS_TOKEN_KEY as string,
      (error: any, decoded: any) => {
        if (error) return res.status(401).json({ error });

        res.locals.currentUser = decoded;
        next();
      }
    );
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error });
  }
};
