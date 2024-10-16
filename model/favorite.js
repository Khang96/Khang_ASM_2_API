const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const setfavorite = new Schema({
    id: {type: ObjectId}
})

module.exports = mongoose.setfavorite || mongoose.model('favorate', setfavorite);