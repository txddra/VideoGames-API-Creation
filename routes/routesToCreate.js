const express = require('express')
const router = express.Router();


const games = require('../models/games.js')






// get all
router.get('/all-games', (req, res) => {
    if (games.name !== games.params.name) {
        return res.status(400).json(games)({
            confirmation: 'fail',
            message: 'no games found'
        })
    } else {
        return res.status(200).json({
            confirmation: 'success',
            games
        })
    }
})


//getSingleGame
router.get('/single-game/:id', (req, res) => {
    let foundGame = games.filter((game) => {
        if (game.id === req.params.id) {
            return res.status(200).json({
                confirmation: 'success',
                games
            });
        }
    });
    if (!foundGame.length)
        return res
            .status(400)
            .json({
                confirmation: 'fail',
                message: 'Game Does Not Exist'
            });
});


//delete
router.delete('/delete-game:id', (req, res) => {
    //filter game based on id parameter in address
    let removeGame = games.filter((foundGame) => {
        return foundGameno.id !== req.params.id;
    });
    //mutate games array and replace with removeUser array
    games = removeGame;
    //return results
    return res.status(200).json({
        confirmation: 'success',
        games
    })
})