var mongoose= require ("mongoose"); 
// Book Schema to add it to mongo data bease
var orderSchema = new mongoose.Schema({
    text:{
        type: String
    }
});
var Order = mongoose.model('Order', orderSchema);
 module.exports =Order;
// Get Books from mongo data base
module.exports.getOrders = (callback) => {
    Order.find(callback);
}
// Add Book to mongo data base
module.exports.addOrder = (order, callback) => {
    Order.create(order, callback);
}



// var mongoose = require('mongoose');

// // Book Schema to add it to mongo data bease
// var orderSchema = new mongoose.Schema({
// 	order:{
// 		type: String
// 	}
// });

// var Order = module.exports = mongoose.model('Order', orderSchema);

// // Get Books from mongo data base
// module.exports.getOrders = (callback) => {
// 	Order.find(callback);
// }



// // Add Book to mongo data base
// module.exports.addOrder = (order, callback) => {
// 	Order.create(order, callback);
// }

