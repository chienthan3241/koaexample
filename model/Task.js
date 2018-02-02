const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TaskSchema = new Schema({name: String, email: String}, {collection: 'usercollection'})

module.exports = mongoose.model("Task", TaskSchema)