import express, { type Application, Response, Request } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";

import routes from "./routes/index.routes";
import { verifyToken } from "./middlewares/verify.token";

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(routes);

app.get("/api/get-token", verifyToken, (req: Request, res: Response) => {
    console.dir(req.currentUser);
});

// const PORT = process.env.PORT || 3000;
const PORT = 5000;

try {
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
} catch (error) {
  console.error("Server failed to start:", error);
}
