const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/mydb";
MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    let query = { address: "Park Lane 38" };
    db.collection("customers").find(query).toArray((err, result) => {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});
