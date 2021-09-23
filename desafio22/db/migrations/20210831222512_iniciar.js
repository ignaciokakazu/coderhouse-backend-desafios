
exports.up = function(knex) {
  return knex.schema
            .createTable('categorias', (categoriasTable) => {
                categoriasTable.increments();
                categoriasTable.string('nombre').notNullable();
                categoriasTable.timestamp('createdAt').defaultTo(knex.fn.now());
            })
            .createTable('productos', (productos) =>{
                productos.increments('id'), //pk implícita
                productos.string('nombre').notNullable(),
                productos.string('descripcion').notNullable(),
                productos.decimal('price', 6, 2).notNullable(),
                productos.integer('stock').notNullable(),
                productos.string('thumbnail').notNullable(),
                productos.timestamp('timestamp').defaultTo(knex.fn.now());

                productos //fk
                    .integer('category_id')
                    .unsigned()
                    .references('id')
                    .inTable('categorias');
            });
};

exports.down = function(knex) {
    return knex.schema
            .dropTable('productos')
            .dropTable('categorias');
};
