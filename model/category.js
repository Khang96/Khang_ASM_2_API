const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const setcategory = new Schema({
    id: {type: ObjectId},
    name: {type: String, unique: true, default:'Khong co gi'},
    image: {type:String},
})

module.exports = mongoose.setcategory || mongoose.model('category', setcategory);