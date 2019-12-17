const ModelCategory = require('./CategoryModel')

module.exports = {
    index: function (req, res) {
        ModelCategory.find().then(function (rows) {
            res.send(rows)
        })
    },

    show: function (req, res) {
        ModelCategory.findById(req.params.id).then(function (row) {
            res.send(row)
        })
    },

    store: function (req, res) {
        ModelCategory.create(req.body).then(function (row) {
            res.send(row),
                res.status(200).send('OK')
        })
    },

    update: function (req, res) {
        ModelCategory.findByIdAndUpdate(
            req.params.id,
            req.body, {
                new: true
            }).then(function (row) {
            res.send(row)
        })
    },

    destroy: function (req, res) {
        ModelCategory.findByIdAndDelete({
            _id: req.params.id
        }).then(function (row) {
            res.send(row)
        })
    }
}