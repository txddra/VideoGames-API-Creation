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
    }
}















module.exports =router