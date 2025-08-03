import bcrypt  from "bcrypt"

export const hashedPassword = async (password: string) => {
try {
    return bcrypt.hash(password, 10);
} catch (error) {
    console.log(error)
}
}