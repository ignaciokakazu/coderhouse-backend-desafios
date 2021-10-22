
module.exports = {
    apps: [
        {
            script: 'dist/index.js',
            watch: true,
            autorestart: true,
            instances: 5
        }
    ]
}

/**
 * https://pm2.keymetrics.io/docs/usage/application-declaration/
 */
 module.exports = {
    apps: [
      {
        name: 'app1',
        script: 'dist/index.js',
        watch: true,
        autorestart: true,
        // instances: 4,
        args: '--puerto=8081',
      },
      {
        name: 'app2',
        script: 'dist/index.js',
        watch: true,
        autorestart: true,
        // instances: 2,
        args: '--puerto=8082',
      },
      {
        script: './service-worker/',
        watch: ['./service-worker'],
      },
    ],
  };