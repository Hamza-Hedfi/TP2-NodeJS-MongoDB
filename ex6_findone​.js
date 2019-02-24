const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/mydb";
MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    db.collection("customers").findOne({}, (err, result) => {
        if (err) throw err;
        console.log(result.name);
        db.close();
    });
});