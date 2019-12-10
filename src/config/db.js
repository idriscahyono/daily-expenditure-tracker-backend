const mongoose = require('mongoose')

mongoose.connect(
    'mongodb+srv://root:root@cluster0-buzgw.mongodb.net/test?retryWrites=true&w=majority'

).then(function () {
    console.log('connected')
}).catch(function (e) {
    console.log(e)
})