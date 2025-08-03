import bcrypt from "bcrypt";

export const comparePassword = async (password: string, hashedPassword: string) => {
  try {
    return bcrypt.compare(password, hashedPassword);
  } catch (error) {
    console.log(error);
  }
};
