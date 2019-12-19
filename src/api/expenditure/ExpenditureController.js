const ModelExpenditure = require('./ExpenditureModel')

module.exports = {
    index: function (req, res) {
        ModelExpenditure.find().populate('category').then(function (rows) {
            res.send(rows)
        })
    },

    show: function (req, res) {
        ModelExpenditure.findById(req.params.id).then(function (row) {
            res.send(row)
        })
    },

    store: function (req, res) {
        ModelExpenditure.create(req.body).then(function (row) {
            res.send(row),
                res.status(200).send('OK')
        })
    },

    update: function (req, res) {
        ModelExpenditure.findByIdAndUpdate(
            req.params.id,
            req.body, {
                new: true
            }).then(function (row) {
            res.send(row)
        })
    },

    destroy: function (req, res) {
        ModelExpenditure.findByIdAndDelete({
            _id: req.params.id
        }).then(function (row) {
            res.send(row)
        })
    },

    currentMonth: function (req, res) {
        ModelExpenditure.find().then(function (rows) {
            const date = new Date()
            const month = date.getMonth() + 1
            const year = date.getFullYear()

            const total = rows
                .filter((row) => {
                    return row.date.includes(`${month} - ${year}`)
                })
                .map(row => row.price)
                .reduce((total, next) => total + next, 0)
            res.send({
                total
            })
        })
    },
}