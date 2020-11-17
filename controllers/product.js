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

module.exports = {
    getAll,
}