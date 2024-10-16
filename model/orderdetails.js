const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const setorderdetails = new Schema({
    id: {type: ObjectId},
    image: {type: String},
    price: {type: Number},
    quantyti: {type: Number},
    Note: {type: String},
    Date: {type: Number},
    Status: {type: String}
})

module.exports = mongoose.setorderdetails || mongoose.model('orderdetails', setorderdetails);