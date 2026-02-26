import { knex } from "../database/knex";

export class UsersRepository {
  async get() {
    return await knex("users").select("*");
    // return await knex.raw("select * from users");
  }

  async post(email: string, password: string) {
    const [id] = await knex("users").insert({ email, password });

    const Newuser = await knex("users").where({ id }).first();

    // await knex.raw("insert into useys (email, password) values (?)", [email, password]);

    return Newuser;
  }

  async getByEmail(email: string) {
    return await knex("users").where({ email }).first();
  }
}
