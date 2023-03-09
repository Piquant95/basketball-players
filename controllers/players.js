const express = require('express');
const router = express.Router();
const { Players } = require('../models')

const seedData = [
    {
       name: "Kobe Bryant", 

       image: "https://image.cnbcfm.com/api/v1/image/101524695-457220551.jpg?v=1395781183&w=630&h=354&ffmt=webp&vtcrop=y"
    },
    
    {
       name: "Michael Jordan", 

       image: "https://cdn.nba.com/manage/2021/08/michael-jordan-celebrates-archive.jpg"
    }
]

router.get('/', async (req, res, next) => {
    try {
        const myPlayers = await Players.find({})
        console.log(myPlayers);
        const context = {
            players: myPlayers
        }
        res.render('players/index.ejs', context)
    } catch(err) {
        console.log(err);
        return next();
    }
});

router.get('/new', (req, res) => {
    res.render('players/new.ejs')
})

router.get('/seed', async (req, res, next) => {
    try {
        const deletedOldOnes = await Musicians.deleteMany({});
        const addPlayers = await Players.insertMany(seedData);
        console.log(seedData);
        console.log(addPlayers);
        res.redirect('/players')
    } catch(err) {
        console.log(err);
        return next();
    }
})


router.post('/', async (req, res, next) => {
    try {
        console.log(req.body);
        const newPlayer = await Players.create(req.body);
        seedData.push(newPlayer);
        console.log(newPlayer);
        res.redirect('/players') 
    } catch(err) {
        console.log(err);
        return next();
    }
})


module.exports = router;