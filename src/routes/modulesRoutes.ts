import { Router } from "express";
import { ModulesController } from "../controller/modulesController";

const router = Router();
const controller = new ModulesController();

router.get("/:course_id/modules", (req, res) => controller.get(req, res));
router.post("/:course_id/modules", (req, res) => controller.post(req, res));

export default router;
