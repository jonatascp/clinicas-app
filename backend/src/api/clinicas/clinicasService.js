const Clinicas = require('./clinicas')

Clinicas.methods(['get', 'post', 'put', 'delete'])
Clinicas.updateOptions({new: true, runValidators: true})

module.exports = Clinicas