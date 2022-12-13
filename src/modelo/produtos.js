const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    nome: String,
    marca: Number,
    preco: String,

})

const Model = mongoose.model('produtos', schema)

module.exports = Model