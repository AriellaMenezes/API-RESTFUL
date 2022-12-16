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

async function put(req, res){
    const { id } = req.params


const produtos = await ProdutosModel.findOneAndUpdate({ _id: id}, req.body, {new: true})

res.send({
    message: 'success',
    produtos,
})


/* atalho shift + alt + A
async function put(req, res){
    const { id } = req.params

    const produtos = await ProdutosModel.findOne({_id: id })

    await produtos.updateOne(req.body)

    res.send({
        menssage: 'success',
        produtos,
    })
} */

}

async function remove(req, res) {
    const { id } = req.params

    const remove = await ProdutosModel.deleteOne({ _id: id})

    const message = remove.ok ? 'success' : 'error'

    res.send ({
        message,
    })
}



module.exports = {
    get,
    post,
    put,
    remove,
}  