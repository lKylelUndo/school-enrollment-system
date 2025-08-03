import jwt from "jsonwebtoken";
import "dotenv/config";

type UserTypes = {
  id: number;
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
};

export const generateToken = async (user: UserTypes) => {
  try {
    return jwt.sign(
      {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        middleName: user.middleName,
        lastName: user.lastName,
      },
      process.env.ACCESS_TOKEN_KEY as string,
      { expiresIn: "1d" }
    );
  } catch (error) {
    console.log(error);
  }
};
