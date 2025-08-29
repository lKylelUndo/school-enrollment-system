import { Request, Response } from "express";
import Student from "../models/Student";

class Enrollment {
  static async getEnrollmentStatus(req: Request, res: Response) {
    try {
      const { userId } = req.params;
      const ennrollmentStatus = await Student.findOne({ where: { userId } });
      if (!ennrollmentStatus)
        return res.status(400).json({ message: "Currently not enrolled" });

      return res.status(200).json(ennrollmentStatus);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error });
    }
  }

  static async getAllEnrolled(req: Request, res: Response) {
    try {
      const students = await Student.findAll();

      return res.status(200).json(students);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error });
    }
  }

  static async enrollADegree(req: Request, res: Response) {
    try {
      console.table(req.body);
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
      const { userId } = req.params;

      const findStudent = await Student.findOne({ where: { userId } });
      if (!findStudent)
        return res.status(400).json({ message: "Currently not enrolled" });

      const unenrolledStudent = await Student.destroy({ where: { userId } });

      return res
        .status(200)
        .json({ message: "Successfully unenrolled", unenrolledStudent });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error });
    }
  }
}

export default Enrollment;
