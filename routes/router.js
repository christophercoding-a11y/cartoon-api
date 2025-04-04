const express = require('express')
const router = express.Router()

router.use(express.static('public'))

const twoDRoutes = require('./api/2dRoutes')
router.use('/cartoons2D', twoDRoutes)

// home page
router.get('/', (req, res) => {
    res.render('pages/home', {
        title: 'My Cartoons Website',
        name: 'Cartoons'
    })
})

module.exports = router