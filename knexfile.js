// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/cookbook.sqlite3'
    },
    useNullAsDefault : true,
    debug : true
  },
  
  migrations : {
    directory : './data/migrations'
  },

  seeds : {
    directory : './data/migrations'
  },

  pool : {  //not sure I understand about the pool yet.
    afterCreate: (conn, done) => {
      conn.run("PRAGMA foreign_keys = ON", done);
    }
  }

};
