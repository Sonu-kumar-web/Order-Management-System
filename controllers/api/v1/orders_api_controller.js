const Order = require('../../../models/order');

// To create order
module.exports.addOrder = function (req, res) {
    Order.create(req.body, function (err, item) {
        if (err) {
            console.error(err);
            return;
        }
        return res.json({
            item
        })
    })
}

// To get order
module.exports.getOrder = function (req, res) {
    Order.find({}, function (err, item) {
        if (err) {
            console.log(err);
            return;
        }
        return res.json({
            data: {
                orders: item
            }
        });
    })
}