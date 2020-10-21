'use strict';

const MongoClient = require('mongodb').MongoClient;
const {mongoAuth} = require('../auth/authentication.json');

const uri = `mongodb+srv://${mongoAuth.usr}:${mongoAuth.pwd}@cluster0.lmdfy.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true });

client.connect(err => {
  const collection = client.db("test").collection("deliveries");
  // perform actions on the collection object
  client.close();
});
