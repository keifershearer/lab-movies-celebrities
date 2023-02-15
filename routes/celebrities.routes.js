const Celebrity = require("../models/Celebrity.model");

const router = require("express").Router();

router.get('/create', (req, res, next) => {
    try {
        res.render('celebrities/new-celebrity')
    } catch (error) {
        next(error)
    }
})

router.post('/create', async (req, res, next) => {
    try {
        const { name, occupation, catchPhrase } = req.body
        const newCeleb = await Celebrity.create({ name, occupation, catchPhrase })
        res.redirect('/celebrities')
    } catch (error) {
        next(error)
    }
})

router.get('/', async (req, res, next) => {
    try {
        const findCelebs = await Celebrity.find()
        res.render('celebrities/celebrities', { foundCelebs: findCelebs })

    } catch (error) {
        next(error)
    }
})
module.exports = router;