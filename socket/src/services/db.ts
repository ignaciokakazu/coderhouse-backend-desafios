// import knex from 'knex';

// export const sqliteDB = knex({
//   client: 'sqlite3',
//   connection: { filename: './mensajes.sqlite' },
//   useNullAsDefault: true,
// });

// export const mySQLDB = knex({
//   client: 'mysql',
//   connection: {
//     host: '127.0.0.1',
//     user: 'root',
//     password: '',
//     database: 'desafio17',
//   },
//   pool: { min: 0, max: 7 },
// });

// sqliteDB.schema.hasTable('mensajes').then((exists:boolean)=> {
//     if (exists) return;
//     console.log('Se crea la tabla mensajes');

//     return sqliteDB.schema.createTable('mensajes', (mensajesTable) => {
//         mensajesTable.increments();
//         mensajesTable.string('username').notNullable();
//         mensajesTable.string('message').notNullable();
//         mensajesTable.timestamp('timestamp').defaultTo(new Date());
//     })
// })

// mySQLDB.schema.hasTable('productos').then((exists:boolean) => {
//   if (!exists) {
//     console.log('NO EXISTE LA TABLA productos. VAMOS A CREARLA');
//     mySQLDB.schema
//       .createTable('productos', (productosTable) => {
//         productosTable.increments('id'), //pk implícita
//         productosTable.string('nombre').notNullable(),
//         productosTable.string('descripcion').notNullable(),
//         productosTable.decimal('price', 6, 2).notNullable(),
//         productosTable.integer('stock').notNullable(),
//         productosTable.string('thumbnail').notNullable(),
//         productosTable.timestamp('timestamp').defaultTo(new Date());
//       })
//       .then(() => {
//         console.log('DONE');
//       });
//   }
// });