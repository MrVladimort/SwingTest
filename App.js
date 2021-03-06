"use strict";

const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const serverConfig = require('./config/server.config');
const db = require('./db');

const HttpError = require('./error');

const logger = require('./logger');
logger.info("Process: " + process.cwd());

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(require('morgan')('combined', {"stream": logger.stream}));

require('./routes')(app);

app.use(notFound);
app.use(errorHandler);

async function notFound(req, res, next) {
    next(new HttpError(404, 'Page not found'));
}

async function errorHandler(err, req, res, next) {
    let errorMsg = '[' + new Date().toString() + '] "' + req.method + ' ' + req.originalUrl + '": ' + err.message;
    if (req.query && _.keys(req.query).length > 0) {
        errorMsg += ' | query: ' + JSON.stringify(req.query);
    }
    if (req.body && _.keys(req.body).length > 0) {
        errorMsg += ' | body: ' + JSON.stringify(req.body);
    }
    logger.error(errorMsg);
    res.status(err.status || 500).json({error: err.message || err});
}

app.listen(serverConfig.port);

module.exports = app;
