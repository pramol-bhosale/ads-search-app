const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

module.exports = function (db_name, coll_name){
    const dbName = db_name;
    client.connect();
    const db = client.db(dbName);
    const collection = db.collection(coll_name);
    return collection;
}