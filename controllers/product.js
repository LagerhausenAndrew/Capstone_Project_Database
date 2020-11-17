const Product = require('../models').Product;

const constants = require('../constants');

const getAll = (req, res) => {
    Product.findAll()
    .then(products => {
        res.status(constants.SUCCESS).json(products)
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

const getProductById = (req, res) => {
    Product.findByPk(req.params.productId)
    .then(foundProduct => {
        if(foundProducts === null){
            res.status(constants.BAD_REQUEST).send('ERROR: Incorrect Post Id')
        }else{
            res.status(constants.SUCCESS).json(foundProduct)
        }
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

module.exports = {
    getAll,
    getProductById
}