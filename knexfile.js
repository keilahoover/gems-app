// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
<<<<<<< HEAD
    connection: 'postgres://localhost/gems_app_dev'
=======
    connection: 'postgres:localhost/gems_app_dev'
>>>>>>> db61035c50ccbe68dc2f325ac079a690976d340c
  },

    test: {
      client: 'pg',
<<<<<<< HEAD
      connection: 'postgres://localhost/gems_app_test'
=======
      connection: 'postgres:localhost:gems_app_test'
>>>>>>> db61035c50ccbe68dc2f325ac079a690976d340c
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
