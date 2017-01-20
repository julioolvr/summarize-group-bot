const Datastore = require('nedb');
const db = new Datastore({ filename: '../db/learn.db', autoload: true });

db.ensureIndex({ fieldName: 'chat.id' }, err => {
  if (err) {
    console.log('Error creating index', err);
  }
});

module.exports = db;
