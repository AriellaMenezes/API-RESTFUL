const ProdutosModel = require('../modelo/produtos')

async function get(req, res) {
    const produtos = await ProdutosModel.find()

    res.send(produtos)

}

module.exports = {
    get,
}