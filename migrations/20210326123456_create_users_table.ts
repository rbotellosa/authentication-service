import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('Users', table => {
        table.increments('id').primary();
        table.string('username', 128).notNullable();
        table.string('email', 128).notNullable();
        table.string('password', 128).notNullable();
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('Users');
}