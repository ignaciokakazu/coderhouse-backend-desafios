"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mySQLDB = exports.sqliteDB = void 0;
var knex_1 = __importDefault(require("knex"));
exports.sqliteDB = knex_1.default({
    client: 'sqlite3',
    connection: { filename: './mensajes.sqlite' },
    useNullAsDefault: true,
});
exports.mySQLDB = knex_1.default({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'desafio17',
    },
    pool: { min: 0, max: 7 },
});
exports.sqliteDB.schema.hasTable('mensajes').then(function (exists) {
    if (exists)
        return;
    console.log('Se crea la tabla mensajes');
    return exports.sqliteDB.schema.createTable('mensajes', function (mensajesTable) {
        mensajesTable.increments();
        mensajesTable.string('username').notNullable();
        mensajesTable.string('message').notNullable();
        mensajesTable.timestamp('timestamp').defaultTo(new Date());
    });
});
exports.mySQLDB.schema.hasTable('productos').then(function (exists) {
    if (!exists) {
        console.log('NO EXISTE LA TABLA productos. VAMOS A CREARLA');
        exports.mySQLDB.schema
            .createTable('productos', function (productosTable) {
            productosTable.increments('id'), //pk implícita
                productosTable.string('nombre').notNullable(),
                productosTable.string('descripcion').notNullable(),
                productosTable.decimal('price', 6, 2).notNullable(),
                productosTable.integer('stock').notNullable(),
                productosTable.string('thumbnail').notNullable(),
                productosTable.timestamp('timestamp').defaultTo(new Date());
        })
            .then(function () {
            console.log('DONE');
        });
    }
});
