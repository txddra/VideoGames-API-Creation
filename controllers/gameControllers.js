const express = require('express');
const router = express.Router();
const games = require('../models/games');


module.exports ={
    getAllGames: (req, res) => {
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
    },
    getSingleGame:(req, res) => {
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
    }
}















module.exports =router