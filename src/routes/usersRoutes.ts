import { Router } from "express";
import { UsersController } from "../controller/usersController";

const router = Router();
const controller = new UsersController();

router.get("/", (request, response) => controller.get(request, response));
router.post("/", (request, response) => controller.post(request, response));

export default router;
