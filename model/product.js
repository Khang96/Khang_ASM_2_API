const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const setProduct = new Schema({
    id: {type: ObjectId},
    name: {type: String, unique: true, default:'Khong co gi'},
    price: {type: Number},
    image: {type:String},
    rate: {type: Number},
    note: {type: String},
    description: {type: String},
    category: {type: ObjectId, ref: 'category'} // khoa ngoai
})

module.exports = mongoose.setProduct || mongoose.model('products', setProduct);