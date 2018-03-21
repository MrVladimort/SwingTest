const mongoose = require('mongoose');
const serverConfig = require('./config/server.config');
mongoose.Promise = global.Promise;

mongoose.set('debug', true);

mongoose.connect('mongodb://' + serverConfig.dbURL);

module.exports = mongoose;
