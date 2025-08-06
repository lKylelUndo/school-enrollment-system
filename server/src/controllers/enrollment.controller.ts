import { Request, Response } from "express";
import Student from "../models/Student";

class Enrollment {
  static async enrollADegree(req: Request, res: Response) {
    try {
      const { userId, studentName, enrolledAt } = req.body;
      const isStudentCurrentlyEnrolled = await Student.findOne({
        where: { userId },
      });

      if (isStudentCurrentlyEnrolled)
        return res.status(400).json({ message: "Currently enrolled" });

      const newStudent = {
        userId,
        studentName,
        enrolledAt,
        isEnrolled: true,
      };

      await Student.create(newStudent);

      return res.status(200).json({ message: "Enrolled successfully" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error });
    }
  }

  static async unEnrollADegree(req: Request, res: Response) {
    try {

    } catch (error) {
      console.log(error);
      return res.status(500).json({ error });
    }
  }
}

export default Enrollment;
