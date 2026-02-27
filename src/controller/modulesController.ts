import { Request, Response } from "express";
import { ModulesRepository } from "../repository/modulesRepository";

const modulesRepository = new ModulesRepository();

export class ModulesController {
  async get(request: Request, response: Response) {
    try {
      const modules = await modulesRepository.get();
      return response.json(modules);
    } catch (error) {
      return response.status(500).json({ message: "Internal server error" });
    }
  }

  async post(request: Request, response: Response) {
    const { course_id } = request.params;
    const { name } = request.body;

    if (!name) {
      return response.status(400).json({ message: "Name is required" });
    }

    if (!course_id) {
      return response.status(400).json({ message: "Course id is required" });
    }

    try {
      const module = await modulesRepository.post(name, Number(course_id));

      return response.status(201).json(module);
    } catch (error) {
      return response.status(500).json({ message: "Internal server error" });
    }
  }
}
