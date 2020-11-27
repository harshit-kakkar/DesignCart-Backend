
const Sequelize = require('sequelize')
const db = new Sequelize('postgres', 'sportscartuser', 'sportscartpass', {
    host: 'sportscart.ci8fuosldpou.ap-south-1.rds.amazonaws.com',
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