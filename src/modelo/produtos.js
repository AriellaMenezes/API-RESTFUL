const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    nome: String,
    marca: String,
    preco: Number,

})

const Model = mongoose.model('produtos', schema)

module.exports = Model