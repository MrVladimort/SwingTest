const mongoose = require('mongoose');
const serverConfig = require('./config/server.config');
mongoose.Promise = global.Promise;

mongoose.set('debug', true);

console.log(serverConfig);

mongoose.connect('mongodb://' + serverConfig.dbHost + ':' + serverConfig.dbPort + '/' + serverConfig.dbCollection);

module.exports = mongoose;
