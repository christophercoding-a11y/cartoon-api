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
        res.render('pages/cartoons', {
            title: '2D Cartoons',
            name: '2D Cartoons',
            data: response.data,
            path: 'cartoons2D'
        })
    })
})

// single page
// localhost:3000/cartoon2d/id

router.get('/:id', (req, res)=> {
    const id = req.params.id

    const url = `https://api.sampleapis.com/cartoons/cartoons2D/${id}`

    axios.get(url).then(resp => {

        const data = resp.data
        res.render('pages/cartoonSingle', {
            title: data.title,
            name: data.title,
            data: data,
            path: 'cartoons2D',
            count
        })
    })
})

module.exports = router