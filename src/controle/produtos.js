 const ProdutosModel = require('../modelo/produtos')

async function get(req, res) {
    const { id } = req.params

    const obj = id ? { _id: id } : null

   
    const produtos = await ProdutosModel.find(obj)

    res.send(produtos)

}

async function post(req, res) {
    const {
        nome,
        marca,
        preco,
    } = req.body

    console.log(req.body)

    const produtos = new ProdutosModel ({
        nome,
        marca,
        preco,
    })

   produtos.save()

    res.send({
        menssage: 'success'
    })

}



module.exports = {
    get,
    post,
}  