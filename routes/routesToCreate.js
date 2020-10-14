const express = require('express')
const router = express.Router();


// const games = require('../models/games.js')


const{getAllGames, getSingleGame,createGame}=require('../controllers/gameControllers.js')



// get all
router.get('/all-games',getAllGames)


//getSingleGame
router.get('/single-game/:id',getSingleGame );

//createGame
router.post('/create-game', createGame);
  

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