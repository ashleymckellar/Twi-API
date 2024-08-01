const express = require('express');
const sauceRouter = express.Router();

const Character = require('../models/Character');

//app.use('/api/character', require('./routes/characterRouter.js'))

characterRouter.get('/', async (req, res, next) => {
    try {
        const allCharacters = await Character.find();
        return res.status(200).send(allCharacters);
    } catch (err) {
        res.status(500);
        return next(err);
    }
});

characterRouter.post('/', async (req, res, next) => {
    try {
        const newCharacter = new Character(req.body)
    }
})
