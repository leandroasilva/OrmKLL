var ormjs = require('../src');
const { faker } = require('@faker-js/faker');

var db = new ormjs.Adapter({
    host: "127.0.0.1",
    port: 3307,
    user: "root",
    pass: "root",
    db: "teste",
    reconnectTimeout: 2000
});

/**
 * Inserindo um registro no banco.
 */
// db.insert('pessoas', { nome: faker.name.fullName() }, function(err, info) {
//     console.log(info, err);
//     process.exit(0);
// });

/**
 * Inserindo array de registros no banco.
 */
// const pessoas = [
//     { nome: faker.name.fullName() },
//     { nome: faker.name.fullName() },
//     { nome: faker.name.fullName() },
//     { nome: faker.name.fullName() },
//     { nome: faker.name.fullName() },
//     { nome: faker.name.fullName() }
// ]
// db.insert('pessoas', pessoas, function(err, info) {
//     console.log(info, err);
//     process.exit(0);
// });