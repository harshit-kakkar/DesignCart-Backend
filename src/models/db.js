
const Sequelize = require('sequelize')
const db = new Sequelize('postgres', 'sportscartuser', 'sportscartpass', {
    host: 'sportscart.ci8fuosldpou.ap-south-1.rds.amazonaws.com',
    port: 5432,
    dialect: 'postgres',
})

const Auth = db.define('auth', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    pass_hash: {
        type: Sequelize.STRING,
        allowNull: false
    },
    last_login: {
        type: Sequelize.DATE,
        allowNull: false
    },
    mobile: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    is_mobile_verified: {
        type: Sequelize.BOOLEAN
    },
    is_email_verified: {
        type: Sequelize.BOOLEAN
    },
})

const Auth = db.define('customer', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    firstname: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    lastname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    mobile: {
        type: Sequelize.DATE,
        allowNull: false,
        primaryKey: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    gender: {
        type: Sequelize.STRING
    },

})


module.exports = {
    db
}