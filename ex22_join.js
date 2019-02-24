const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://127.0.0.1:27017/mydb";
MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    db.collection('orders').aggregate([
        {
            $lookup:
            {
                from: 'products',
                localField: 'product_id',
                foreignField: '_id',
                as: 'orderdetails'
            }
        }
    ], function (err, res) {
        if (err) throw err;
        console.log(JSON.stringify(res));
        db.close();
    });
});