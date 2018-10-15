const restful = require('node-restful')
const mongoose = restful.mongoose

const clinicasSchema = new mongoose.Schema({
    name: { type: String, required: true},
    hasDiagram: {type: Boolean, required: true, default: false},
    createdAt: {type: Date, default: Date.now}
})

module.exports = restful.model('Clinicas', clinicasSchema)