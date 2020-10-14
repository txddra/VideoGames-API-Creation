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

//createGame
router.post('/create-game', (req, res) => {
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
  });
  

  //update Game
  router.put('/update-game/:id', (req, res) => {
    //grab the inputted information
    let updatedGame = req.body;
  
    //search the games array
    games.filter((foundGame) => {
      //find the game
      if (foundGame.id === req.params.id) {
        //change values for game if inputted
        foundGame.name = updatedGame.name ? updatedGame.name : foundGame.name;
        foundGame.description = updatedGame.description
          ? updatedGame.description
          : foundGame.description;
      }
    });
    //return array of games
    return res.status(200).json({ message: 'Game Updates', games });
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