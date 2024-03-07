const express = require('express')
const itemController  = require('../controllers/itemController')
const router = express.Router()

router
    .route('/')
    .get(itemController.getAll)

router
.route('/:id')
    .get(itemController.getById)

module.exports = router