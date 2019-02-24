const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/mydb";
MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    let myquery = { address: 'Mountain 21' };
    db.collection("customers").deleteOne(myquery, (err, obj) => {
        if (err) throw err;
        console.log("1 document deleted");
        db.close();
    });
});