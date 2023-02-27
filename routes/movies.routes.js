const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model")
const Movie = require('../models/Movie.model')


router.get('/create', async (req, res, next) => {
    try {
        const allCelebs = await Celebrity.find()
        res.render('movies/new-movie', { allCelebs })
    } catch (error) {
        next(error)
    }
})

router.post('/create', async (req, res, next) => {
    console.log(req.body)
    const { title, genre, plot, cast } = req.body
    try {
        const newCeleb = await Celebrity.create({ title, genre, plot, cast })
        res.redirect('/celebrities')
    } catch (error) {
        next(error)
    }
})

router.get('/', async (req, res, next) => {
    try {
        const allMovies = await Movie.find()
        res.render('movies/movies', { movies: allMovies })

    } catch (error) {
        next(error)
    }
})
// router.get('/', async (req, res, next) => {
//     try {
//         const allMovies = await Movie.find().populate('cast')
//         res.render('movies/movies', { allMovies })
//     } catch (error) {

//     }
// })
module.exports = router;