const Customer = (db, Sequelize) => {
    return db.define('customer', {
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
                unique: true,
                allowNull: false

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
}

module.exports = {
    Customer
}