import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.transaction(async trx => {
    await trx.schema.createTable('Users', table => {
      table.increments('id').primary();
      table.string('username', 128).notNullable();
      table.string('email', 128).notNullable();
      table.string('password', 128).notNullable();
    });
    await trx.schema.createTable('AuditLogs', table => {
      table.increments('LogID').primary();
      table.integer('UserID').references('id').inTable('Users').onDelete('CASCADE');
      table.string('Action', 100).notNullable();
      table.string('IPAddress', 45);
      table.timestamp('Timestamp').defaultTo(trx.fn.now());
    });
    await trx.schema.createTable('RefreshTokens', table => {
      table.increments('TokenID').primary();
      table.integer('UserID').references('id').inTable('Users').onDelete('CASCADE');
      table.text('Token').notNullable();
      table.timestamp('Expires').notNullable();
      table.timestamp('CreatedAt').defaultTo(trx.fn.now());
      table.boolean('Revoked').defaultTo(false);
    });
  });
}
export async function down(knex: Knex): Promise<void> {
  await knex.transaction(async trx => {
    await trx.schema.dropTableIfExists('RefreshTokens');
    await trx.schema.dropTableIfExists('AuditLogs');
    await trx.schema.dropTableIfExists('Users');
});
}