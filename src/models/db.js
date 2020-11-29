
const Sequelize = require('sequelize')
const db = new Sequelize('postgres', process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    port: 5432,
    dialect: 'postgres',
})

const Customer = db.define('customer', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true

    },
    email: {
        type: Sequelize.STRING,
        unique: true

    },
    pass_hash: {
        type: Sequelize.STRING,
        allowNull: false
    },
    mobile: {
        type: Sequelize.STRING,
        unique: true

    },
    is_mobile_verified: {
        type: Sequelize.BOOLEAN
    },
    is_email_verified: {
        type: Sequelize.BOOLEAN
    },
    firstname: {
        type: Sequelize.STRING,
        allowNull: false,

    },
    lastname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    gender: {
        type: Sequelize.STRING
    },
    last_login: {
        type: Sequelize.DATE,
        allowNull: false
    },
})




module.exports = {
    db
}