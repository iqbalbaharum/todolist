const express = require('express');
const router = express.Router()

const todoController = require('../controllers/todo.js')

router.get('/', todoController.getAll)
router.get('/todo/:id', todoController.getById)
router.post('/todo', todoController.create)
router.post('/todo/update/:id', todoController.update)
router.get('/todo/delete/:id', todoController.delete)

module.exports = router
