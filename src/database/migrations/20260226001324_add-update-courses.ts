import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable("courses", (table) => {
    // Adiciona a coluna "updated_at" do tipo timestamp, com valor padrão para a data e hora atual, e posicionada após a coluna "created_at"
    table.timestamp("updated_at").defaultTo(knex.fn.now()).after("created_at");
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable("courses", (table) => {
    // Remove a coluna "updated_at"
    table.dropColumn("updated_at");
  });
}
