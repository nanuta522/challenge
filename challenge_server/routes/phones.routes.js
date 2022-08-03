const router = require('express').Router()
const phones = require('./../data/phones.json')

router.get('/', (req, res) => {
    res.json(phones)
})

router.get('/:id', (req, res) => {

    const { id } = req.params

    const foundPhone = phones.find(phone => phone.id == id)

    res.json(foundPhone)

})

module.exports = router
