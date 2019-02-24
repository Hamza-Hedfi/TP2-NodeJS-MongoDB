const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/mydb";
MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    db.collection("customers").find({}).toArray((err, result) => {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});
