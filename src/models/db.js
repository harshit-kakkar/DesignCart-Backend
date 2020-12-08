
const Sequelize = require('sequelize')
const db = new Sequelize('postgres', process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    port: 5432,
    dialect: 'postgres',
})

const Customer = require('./Customer').Customer(db, Sequelize)


module.exports = {
    db, Customer
}