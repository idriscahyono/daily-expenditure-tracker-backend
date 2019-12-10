const mongoose = require('mongoose')

const expenditureSchema = new mongoose.Schema({
    name: String,
    price: Number,
    date: String
})

module.exports = mongoose.model('Expenditure', expenditureSchema)