const Sequelize = require ("sequelize")

const contactsModel = require('./contacts')
const allConfigs = require('../configs/sequelize')
const contacts = require("../database/contacts")
const environment = process.env.NODE_ENV || 'development'
const config = allConfigs[environment]
//this is connection to mySQL
const connection = new Sequelize(config.database, config.username, config.password, {
  host: config.host, dialect: config.dialect
})

//this is where I'll declare the relationship between the tables

contacts.belongsToOne

module.exports= {
    contactsModel
}