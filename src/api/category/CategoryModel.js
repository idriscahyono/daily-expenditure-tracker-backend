const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    categories: [String]
})

module.exports = mongoose.model('Category', categorySchema)