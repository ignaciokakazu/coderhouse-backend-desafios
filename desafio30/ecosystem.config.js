/**
 * https://pm2.keymetrics.io/docs/usage/application-declaration/
 */

//para ejecutar: pm2 start ecosystem.config.js
//pm2 list
//desde 1:40
 module.exports = {
  apps: [
    {
      name: 'app1',
      script: 'dist/app.js',
      watch: true,
      autorestart: true, //por si se cae, reinicia
      // instances: 4,
      args: '--puerto=8081', //esto funciona en combinación con argv y config.PORT. VER nginx.config
    },
    {
      name: 'app2',
      script: 'dist/app.js',
      watch: true,
      autorestart: true, //por si se cae, reinicia
      instances: 4,
      args: '--puerto=8082', //esto funciona en combinación con argv y config.PORT. VER nginx.config
    },
    {
      script: './service-worker/',
      watch: ['./service-worker'],
    },
  ],
};
