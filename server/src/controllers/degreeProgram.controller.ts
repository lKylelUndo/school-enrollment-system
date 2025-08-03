import { Request, Response } from "express";

class DegreeProgram {
  static viewAProgram(req: Request, res: Response) {
    console.log(`first`);
  }

  static getAllProgram(req: Request, res: Response) {
    console.log(`first`);
  }

  static addNewProgram(req: Request, res: Response) {
    console.log(`first`);
  }

  static deleteAProgram(req: Request, res: Response) {
    const { id } = req.params;
    console.log(id);
  }

  static updateAProgram(req: Request, res: Response) {
    const { id } = req.params;
    console.log(id);
  }
}

export default DegreeProgram;
