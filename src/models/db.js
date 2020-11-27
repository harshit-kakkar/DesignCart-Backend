 
const Sequelize = require('sequelize')
const db = new Sequelize ('postgres', 'sportscartuser', 'sportscartpass', {
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
    email:{
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    pass_hash:{
        type: Sequelize.STRING,
        allowNull: false
    },
    last_login:{
        type: Sequelize.DATE,
        allowNull: false
    },
    mobile:{
        type: Sequelize.STRING, 
        allowNull: false, 
        primaryKey: true
    },
    is_mobile_verified:{
        type: Sequelize.BOOLEAN
    },
    is_email_verified:{
        type: Sequelize.BOOLEAN
    },
})

module.exports = {
    db
}