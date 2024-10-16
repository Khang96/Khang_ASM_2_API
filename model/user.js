const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const setuser = new Schema({
    id: {type: ObjectId},
    name: {type: String, unique: true, default:'Khong co gi'},
    phone: {type: Number},
    pass: {type: String},
    address: {type: String}
})

module.exports = mongoose.setuser || mongoose.model('user', setuser);