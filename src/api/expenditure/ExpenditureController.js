const ModelExpenditure = require('./ExpenditureModel')

module.exports = {
    index: function (req, res) {
        ModelExpenditure.find().then(function (rows) {
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
            res.send(row)
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
    }
}