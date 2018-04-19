// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
<<<<<<< HEAD
    connection: 'postgres//awray:doot@localhost:5433/gems_app_dev'

=======
    connection: 'postgres://localhost/gems_app_dev'
>>>>>>> sign-up-form
  },

    test: {
      client: 'pg',
<<<<<<< HEAD
      connection: 'postgres//awray:doot@localhost:5433/gems_app_test'

=======
      connection: 'postgres://localhost/gems_app_test'
>>>>>>> sign-up-form
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
