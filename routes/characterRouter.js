const express = require('express');
const characterRouter = express.Router();

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
        const newCharacter = new Character(req.body);
        console.log(req.body)
        const savedCharacter = await newCharacter.save();
        return res.status(201).send(savedCharacter);
    } catch (err) {
        res.status(500);
        return next(err);
    }
});

characterRouter.delete('/:characterId', async (req, res, next) => {
    try {
        const deletedCharacter = await Character.findByIdAndDelete(
            req.params.characterId,
        );
        return res
            .status(201)
            .send(`You have successfully deleted ${deletedCharacter.name}`);
    } catch (err) {
        res.status(500);
        return next(err);
    }
});

characterRouter.put('/:characterId', async (req, res, next) => {
    try {
        const updatedCharacter = await Character.findByIdAndUpdate(
            req.params.characterId,
            req.body,
            { new: true },
        );
        return res.status(201).send(updatedCharacter);
    } catch (err) {
        res.status(500);
        return next(err);
    }
});

module.exports = characterRouter
