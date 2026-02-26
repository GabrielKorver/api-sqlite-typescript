import { Router } from "express";
import { CoursesController } from "../controller/coursesController";

const router = Router();
const controller = new CoursesController();

router.get("/", (request, response) => controller.get(request, response));
router.post("/", (request, response) => controller.post(request, response));

export default router;
