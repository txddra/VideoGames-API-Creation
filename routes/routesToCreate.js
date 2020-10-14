const express = require('express')
const router = express.Router();


// const games = require('../models/games.js')


const {
    getAllGames,
    getSingleGame,
    createGame,
    updateGame,
    deleteGame
} = require('../controllers/gameControllers.js')



// get all
router.get('/all-games', getAllGames)


//getSingleGame
router.get('/single-game/:id', getSingleGame);

//createGame
router.post('/create-game', createGame);


//update Game
router.put('/update-game/:id',updateGame);








//delete
router.delete('/delete-game:id',deleteGame )