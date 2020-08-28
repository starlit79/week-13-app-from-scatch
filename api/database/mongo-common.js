/**
  All configuration that is required for a shared mongo server hosted in the cloud
 */
const {MongoClient} = require('mongodb');

let database = null;

async function startDatabase() {
  const mongoDBURL = `mongodb+srv://coolmix:<password123>@cluster0.bx3ci.mongodb.net/<capecodgetaway>?retryWrites=true&w=majority`;
  const connection = await MongoClient.connect(mongoDBURL, {useNewUrlParser: true});
  database = connection.db();
}

async function getDatabase() {
  if (!database) await startDatabase();
  return database;
}

module.exports = {
  getDatabase,
  startDatabase,
};
