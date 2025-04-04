const express = require('express')
const router = express.Router()
const axios = require('axios')

let count
// get data using axios
axios.get('https://api.sampleapis.com/cartoons/cartoons2D')
    .then(res => count = res.data.length)

// localhost:3000/cartoons2D
router.get('/', (req, res) => {
    const url = 'https://api.sampleapis.com/cartoons/cartoons2D'

    axios.get(url).then(response => {
        console.log(response.data)
        res.render('pages/cartoons', {
            title: '2D Cartoons',
            name: '2D Cartoons',
            data: response.data
        })
    })
})

module.exports = router