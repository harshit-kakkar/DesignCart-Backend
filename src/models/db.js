 
const Sequelize = require('sequelize')
const db = new Sequelize ('sportscart', 'sportscartuser', 'sportscartpass', {
    host: 'sportscart.ci8fuosldpou.ap-south-1.rds.amazonaws.com',
    port: 5432,
    logging: console.log,
    maxConcurrentQueries: 100,
    dialect: 'postgres',
    dialectOptions: {
        ssl:false
    },
    pool: { maxConnections: 5, maxIdleTime: 30},
    language: 'en'
})


module.exports = {
    db
}