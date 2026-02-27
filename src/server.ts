import express, { Request, Response } from "express";
import dotenv from "dotenv";
import coursesRoutes from "./routes/coursesRoutes";
import usersRoutes from "./routes/usersRoutes";
import modulesRoutes from "./routes/modulesRoutes";
dotenv.config();

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/courses", coursesRoutes);
app.use("/users", usersRoutes);
app.use("/courses/", modulesRoutes);

app.get("/", function (request: Request, response: Response) {
  response.json({ message: "Servidor rodando 🚀" });
});

app.listen(PORT, function () {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
