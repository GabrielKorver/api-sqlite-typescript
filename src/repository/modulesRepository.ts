import { knex } from "../database/knex";

export class ModulesRepository {
  async get() {
    return await knex("courses")
      .select(
        "courses.id as course_id",
        "courses.name as course_name",
        "courses_modules_relations.id as module_id",
        "courses_modules_relations.name as module_name",
      )
      .leftJoin(
        "courses_modules_relations",
        "courses.id",
        "courses_modules_relations.course_id",
      );
  }

  async post(name: string, course_id: number) {
    const course = await knex("courses").where({ id: course_id }).first();

    if (!course) {
      throw new Error("Course not found");
    }

    const [id] = await knex("courses_modules_relations").insert({
      name,
      course_id,
    });

    return await knex("courses_modules_relations").where({ id }).first();
  }
}
