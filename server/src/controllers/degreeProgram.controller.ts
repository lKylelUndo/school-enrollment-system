import { Request, Response } from "express";
import { matchedData, validationResult } from "express-validator";
import DegreeProgram from "../models/DegreeProgram";

class DegreeProgramController {
  static async viewAProgram(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const findProgram = await DegreeProgram.findOne({ where: { id } });
      if (!findProgram)
        return res.status(400).json({ message: "Program doesn't exist" });

      return res.status(200).json({ findProgram });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error });
    }
  }

  static async getAllProgram(req: Request, res: Response) {
    try {
      const allDegreePrograms = await DegreeProgram.findAll();

      return res.status(200).json({ allDegreePrograms });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error });
    }
  }

  static async addNewProgram(req: Request, res: Response) {
    try {
      const result = validationResult(req);

      if (!result.isEmpty())
        return res.status(400).json({ errors: result.array() });

      const data = matchedData(req);

      const createdProgram = await DegreeProgram.create(data);

      return res.status(200).json({ message: "Success", createdProgram });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error });
    }
  }

  static async deleteAProgram(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const findProgram = await DegreeProgram.destroy({ where: { id } });
      if (!findProgram)
        return res.status(400).json({ message: "Program doesn't exist" });

      return res.status(200).json({ message: "Deleted" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error });
    }
  }

  static async updateAProgram(req: Request, res: Response) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ message: "Id is required" });

      console.log(req.body);

      const findProgram = await DegreeProgram.update(req.body, {
        where: { id },
      });

      if (!findProgram)
        return res.status(400).json({ message: "Program doesn't exist" });

      const updatedProgram = await DegreeProgram.findOne({ where: { id } });

      return res.status(200).json({ message: "Updated", updatedProgram });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error });
    }
  }
}

export default DegreeProgramController;
