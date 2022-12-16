const router = require('express').Router()

const ProdutosCotroller = require('../controle/produtos')

// VERBOS HTTP (4 TIPOS)
// GET - obter dados 
// POST - enviar/receber dados
// PUT - atualizar dados 
// DELETE - deletar/remover dados


router.get('/produtos/:id?', ProdutosCotroller.get)
router.post('/produtos', ProdutosCotroller.post)
router.put('/produtos/:id', ProdutosCotroller.put)
router.delete('/produtos/:id', ProdutosCotroller.remove)
module.exports = router