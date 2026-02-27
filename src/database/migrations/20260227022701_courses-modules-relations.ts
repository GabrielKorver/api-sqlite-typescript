import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("courses_modules_relations", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.integer("course_id").references("id").inTable("courses");
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("courses_modules_relations");
}
