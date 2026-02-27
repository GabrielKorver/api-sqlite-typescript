import { Request, Response } from "express";
import { UsersRepository } from "../repository/usersRepository";

const usersRepository = new UsersRepository();

export class UsersController {
  async get(request: Request, response: Response) {
    const courses = await usersRepository.get();
    return response.json(courses);
  }

  async post(request: Request, response: Response) {
    try {
      const { email, password } = request.body;

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(email)) {
        return response.status(400).json({
          message: "Invalid email format",
        });
      }

      if (!email || !password) {
        return response.status(400).json({
          message: "Email and Password is required",
        });
      }

      if (password.length < 6) {
        return response.status(400).json({
          message: "Password must be at least 6 characters long",
        });
      }

      const existingUser = await usersRepository.getByEmail(email);

      if (existingUser) {
        return response.status(400).json({
          message: "User already exists",
        });
      }

      const course = await usersRepository.post(email, password);
      return response.status(201).json(course);
    } catch (error) {
      return response.status(500).json({ message: "Internal server error" });
    }
  }

  async put(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const { email, password } = request.body;

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!email || !password) {
        return response.status(400).json({
          message: "Email and Password is required",
        });
      }

      if (!emailRegex.test(email)) {
        return response.status(400).json({
          message: "Invalid email format",
        });
      }

      if (password.length < 6) {
        return response.status(400).json({
          message: "Password must be at least 6 characters long",
        });
      }

      const existingUser = await usersRepository.getByEmail(email);

      if (existingUser && existingUser.id !== Number(id)) {
        return response.status(400).json({
          message: "Email already in use by another user",
        });
      }

      const updatedUser = await usersRepository.put(
        Number(id),
        email,
        password,
      );

      if (!updatedUser) {
        return response.status(404).json({
          message: "User not found",
        });
      }

      return response.status(200).json({
        message: "User updated successfully",
        user: updatedUser,
      });
    } catch (error) {
      return response.status(500).json({
        message: "Internal server error",
      });
    }
  }
  async delete(request: Request, response: Response) {
    try {
      const { id } = request.params;

      const deletedUser = await usersRepository.delete(Number(id));

      if (!deletedUser) {
        return response.status(404).json({
          message: "User not found",
        });
      }

      return response.status(200).json({
        message: "User deleted successfully",
        user: deletedUser,
      });
    } catch (error) {
      return response.status(500).json({
        message: "Internal server error",
      });
    }
  }
}
