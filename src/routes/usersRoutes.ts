import { Router } from "express";
import { UsersController } from "../controller/usersController";

const router = Router();
const controller = new UsersController();

router.get("/", (request, response) => controller.get(request, response));
router.post("/", (request, response) => controller.post(request, response));
router.put("/:id", (request, response) => controller.put(request, response));
router.delete("/:id", (request, response) =>
  controller.delete(request, response),
);

export default router;
