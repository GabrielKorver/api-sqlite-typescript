import { knex } from "../database/knex";

export class UsersRepository {
  async get() {
    return await knex("users").select("*");
  }

  async post(email: string, password: string) {
    const [id] = await knex("users").insert({ email, password });
    const Newuser = await knex("users").where({ id }).first();
    return Newuser;
  }

  async put(id: number, email: string, password: string) {
    const user = await knex("users").where({ id }).first();

    if (!user) {
      return null;
    }

    await knex("users").where({ id }).update({ email, password });

    const updatedUser = await knex("users").where({ id }).first();

    return updatedUser;
  }

  async delete(id: number) {
    const user = await knex("users").where({ id }).first();

    if (!user) {
      return null;
    }

    await knex("users").where({ id }).del();

    return user;
  }

  async getByEmail(email: string) {
    return await knex("users").where({ email }).first();
  }
}
