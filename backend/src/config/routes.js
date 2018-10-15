const express = require('express')

module.exports = function(server) {

    //API Routers
    const router = express.Router()
    server.use('/api', router)

    //Clinicas Routers
    const clinicasService = require('../api/clinicas/clinicasService')
    clinicasService.register(router, '/clinicas')
}
