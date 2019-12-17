const mongoose = require('mongoose')

const expenditureSchema = new mongoose.Schema({
    name: String,
    price: Number,
    date: String,
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }
})

module.exports = mongoose.model('Expenditure', expenditureSchema)