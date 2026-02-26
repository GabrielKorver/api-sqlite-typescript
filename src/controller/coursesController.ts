import { Request, Response } from "express";
import { CoursesRepository } from "../repository/coursesRepository";

const coursesRepository = new CoursesRepository();

export class CoursesController {
  async get(request: Request, response: Response) {
    const courses = await coursesRepository.get();
    return response.json(courses);
  }

  async post(request: Request, response: Response) {
    const { name } = request.body;

    if (!name) {
      return response.status(400).json({ message: "Name is required" });
    }

    try {
      const course = await coursesRepository.post(name);
      return response.status(201).json(course);
    } catch (error) {
      return response.status(500).json({ message: "Internal server error" });
    }
  }
}
