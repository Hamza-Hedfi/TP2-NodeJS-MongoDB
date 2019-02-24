const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://127.0.0.1:27017/mydb";
MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    let myquery = { address: /^S/ };
    let newvalues = { $set: { name: "Minnie" } };
    db.collection("customers").updateMany(myquery, newvalues,
        (err, res) => {
            if (err) throw err;
            console.log(res.result.nModified + " document(s) updated");
            db.close();
        });
});
