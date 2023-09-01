// Підключаємо роутер до бек-енду
const express = require('express')
const router = express.Router()

// Підключіть файли роутів
const test = require('./test')
// Підключіть інші файли роутів, якщо є
const page1 = require('./page1')
const page2 = require('./page2')
// Об'єднайте файли роутів за потреби
router.use('/', test)
// Використовуйте інші файли роутів, якщо є
router.use('/page1', page1)
router.use('/page2', page2)
// Експортуємо глобальний роутер
module.exports = router
