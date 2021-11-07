import log4js from 'log4js';

log4js.configure({
    appenders: {
      fileAppender: { type: 'file', filename: './logs/desafio31.log' },
      consola: { type: 'console' },
    },
    categories: {
      default: { appenders: ['fileAppender', 'consola'], level: 'error' },
      miLoggerPersonalizado: { appenders: ['consola'], level: 'info' },
    },
  });

const logger = log4js.getLogger();

logger.level = 'info';

export default logger;
