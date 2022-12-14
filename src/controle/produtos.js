 const ProdutosModel = require('../modelo/produtos')

async function get(req, res) {
    const { id } = req.params

    const obj = id ? { _id: id } : null

   
    const produtos = await ProdutosModel.find(obj)

    res.send(produtos)

}

module.exports = {
    get,
}  