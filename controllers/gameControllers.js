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
    },
    createGame:(req, res) => {
        //check if game exists
        let existingGame = games.filter(
          (foundGame) => foundGame.name === req.body.description
        );
        if (existingGame.length) {
          return res.status(400).send('Game Already Exists');
        }
      
        //create a new game object
        const newGame = {};
      
        //values for games based on req.body inputs in postman
        newUser.name = req.body.name;
        newUser.description = req.body.description;
        newUser.id = String(games.length + 1);
        // add game to array
        games.push(newGame);
        //return the new game
        return res.status(200).json({ confirmation: 'success', newGame });
    },
        
}















module.exports =router