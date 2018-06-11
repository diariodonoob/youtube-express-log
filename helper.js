const expressWinston = require('express-winston');
const winston = require('winston');

expressWinston.requestWhitelist.push('body');
expressWinston.responseWhitelist.push('body');

const log = name => expressWinston.logger({
    transports: [
        new winston.transports.Console({
            json: true,
            colorize: true,
            level: 'info',
            handleExceptions: true
        }),
        new winston.transports.File({
            name: name,
            filename: name,
            level: 'debug',
            maxsize: 5242880,
            maxFiles: 10,
            json: true,
            colorize: true
        })
    ]
})

module.exports = { log }