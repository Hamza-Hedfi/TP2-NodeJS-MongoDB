const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://127.0.0.1:27017/mydb";
MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    let myquery = { address: "Valley 345" };
    let newvalues = { name: "Mickey", address: "Canyon 123" };
    db.collection("customers").updateOne(myquery, newvalues, function (err,
        res) {
        if (err) throw err;
        console.log("1 document updated");
        db.close();
    });
});