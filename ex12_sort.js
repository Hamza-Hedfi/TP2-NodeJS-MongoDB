const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/mydb";
MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    let mysort = { name: 1 };
    db.collection("customers").find().sort(mysort).toArray((err,
        result) => {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});
