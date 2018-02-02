const Sequelize = require('sequelize');
const sequelize = require("./database");

const Classify = sequelize.define('Classify',{
    'name':{
        type: Sequelize.STRING
    }
});

module.exports = Classify;