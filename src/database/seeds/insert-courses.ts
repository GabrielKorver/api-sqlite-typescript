import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  await knex("courses").insert([
    { id: 1, name: "typescript" },
    { id: 2, name: "javascript" },
    { id: 3, name: "node.js" },
    { id: 4, name: "react" },
    { id: 5, name: "angular" },
    { id: 6, name: "vue.js" },
    { id: 7, name: "python" },
    { id: 8, name: "java" },
    { id: 9, name: "c#" },
    { id: 10, name: "php" },
    { id: 11, name: "ruby" },
    { id: 12, name: "go" },
    { id: 13, name: "rust" },
  ]);
}
