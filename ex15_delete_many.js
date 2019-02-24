const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/mydb";
MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    let myquery = { address: /^O/ };
    db.collection("customers").deleteMany(myquery, (err, obj) => {
        if (err) throw err;
        console.log(obj.result.n + " document(s) deleted");
        db.close();
    });
});