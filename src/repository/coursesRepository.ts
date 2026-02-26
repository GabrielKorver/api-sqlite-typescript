import { knex } from "../database/knex";

export class CoursesRepository {
  async get() {
    return await knex("courses").select("*");
    // return await knex.raw("select * from courses");
  }

  async post(name: string) {
    const [id] = await knex("courses").insert({ name });

    const course = await knex("courses").where({ id }).first();

    // await knex.raw("insert into courses (name) values (?)", [name]);

    return course;
  }
}
