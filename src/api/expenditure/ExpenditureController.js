const ExpenditureModel = require('./ExpenditureModel')
const CategoryModel = require('../category/CategoryModel')

async function getCurrentMonthExpenditures() {
    const date = new Date()
    const month = date.getMonth() + 1
    const year = date.getFullYear()

    const rows = await ExpenditureModel.find()
    return rows.filter((row) => row.date.includes(`${month} - ${year}`))
}

module.exports = {
    index: function (req, res) {
        ExpenditureModel.find().populate('category').then(function (rows) {
            res.send(rows)
        })
    },

    show: function (req, res) {
        ExpenditureModel.findById(req.params.id).then(function (row) {
            res.send(row)
        })
    },

    store: function (req, res) {
        ExpenditureModel.create(req.body).then(function (row) {
            res.send(row),
                res.status(200).send('OK')
        })
    },

    update: function (req, res) {
        ExpenditureModel.findByIdAndUpdate(
            req.params.id,
            req.body, {
                new: true
            }).then(function (row) {
            res.send(row)
        })
    },

    destroy: function (req, res) {
        ExpenditureModel.findByIdAndDelete({
            _id: req.params.id
        }).then(function (row) {
            res.send(row)
        })
    },

    currentMonth: async function (req, res) {
        const total = await getCurrentMonthExpenditures()
            .map(row => row.price)
            .reduce((total, next) => total + next, 0)
        res.send({
            total
        })
    },

    currentMonthCategory: async function (req, res) {
        const currentMonthExpenditures = await getCurrentMonthExpenditures()

        CategoryModel.find().then(function (categoryRows) {
            const categoryTotals = []

            categoryRows.forEach(categoryRow => {
                categoryTotals.push({
                    category: categoryRow.name,
                    total: currentMonthExpenditures
                        .filter(expenditure => expenditure.category.equals(categoryRow._id))
                        .map(expenditure => expenditure.price)
                        .reduce((total, next) => total + next, 0)
                })
            })

            categoryTotals.sort((prev, next) => prev.total > next.total ? -1 : 1)

            res.send(categoryTotals.length ? categoryTotals[0] : {})
        })
    },
}