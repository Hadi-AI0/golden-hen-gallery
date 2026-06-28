module.exports = {
    apps: [
      {
        name: 'ahd-trade',
        script: 'npx',
        args: 'serve -s dist -l 8080',
        cwd: '/home/ahd-trade/htdocs/ahd-trade.com',
        instances: 1,
        autorestart: true,
        watch: false,
        max_memory_restart: '1G',
        env: {
          NODE_ENV: 'production'
        },
        env_production: {
          NODE_ENV: 'production'
        }
      }
    ]
  };

