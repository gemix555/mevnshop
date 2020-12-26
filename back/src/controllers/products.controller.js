const genericCrud = require('./generic.conttroller')
const {Product} = require('../model/index')
module.exports = {
    ...genericCrud(Product)
}