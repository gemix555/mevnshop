const genericCrud = require('./generic.conttroller')
const {Category} = require('../model/index')
module.exports = {
    ...genericCrud(Category)
}