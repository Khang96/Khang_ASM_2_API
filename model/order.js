const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const setorder = new Schema({
    id: {type: ObjectId},
    price: {type: Number},
    quantyti: {type: Number},
    Note: {type: String},
    Date: {type: Number},
    Status: {type: String}
})

module.exports = mongoose.setorder || mongoose.model('order', setorder);