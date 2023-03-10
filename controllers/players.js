const express = require('express');
const router = express.Router();
const { Players } = require('../models')

const seedData = [
    {
       name: "Kobe Bryant",
       
       team: "Los Angeles Lakers",

       image: "https://image.cnbcfm.com/api/v1/image/101524695-457220551.jpg?v=1395781183&w=630&h=354&ffmt=webp&vtcrop=y"

    },
    
    {
       name: "Michael Jordan",

       team: "Chicago Bulls",

       image: "https://cdn.nba.com/manage/2021/08/michael-jordan-celebrates-archive.jpg"
    },
    
    {
       name: "Stephen Curry",

       team: "Golden State Warriors",

       image: "https://library.sportingnews.com/styles/crop_style_16_9_desktop_webp/s3/2022-01/stephen-curry-ftr_1brlc3k3jwvwr1fjrw3y1k16pj.jpeg.webp?itok=f7eU21Ml"
    },
    
    {
       name: "Giannis antetokounmpo ",

       team: "Milwaukee Bucks",

       image: "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2023/03/1862/1046/GettyImages-1471325192.jpg?ve=1&tl=1"
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
        const deletedOldOnes = await Players.deleteMany({});
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

router.get('/players/:id', async (req, res, next) => {
    try {
        console.log(req.params)
        const player = await Players.findById(req.params.id);
        console.log(player);
        const context = {
            player: player
        }
        res.render('players/show.ejs', context);
    } catch(err) {
        console.log(err);
        return next();
    }
})
        
       

router.get('/players/:id/edit', async (req, res, next) => {
    try {
        const personToEdit = await Players.findById(req.params.id);
        console.log(personToEdit);
        res.render('players/edit.ejs', {personToEdit: personToEdit})
    } catch(itWorks) {
        console.log(itWorks);
        return next();
    }
})

router.put('/players/:id', async(req, res, next) => {
    try {
        console.log(req.params.id);
        console.log(req.body);
        const updateItem = await Players.findByIdAndUpdate(req.params.id, req.body);
        console.log(updateItem);
        res.redirect('/players');
    } catch(veryNice) {
        console.log(veryNice);
        return next();
    }
})

router.delete('/players/:id', async (req, res, next) => {
    try {
        console.log(req.params);
        console.log("I'm hitting the delete route");
        const itemGettingDeleted = await Players.findByIdAndDelete(req.params.id);
        console.log(itemGettingDeleted);
        res.redirect('/players');
    } catch(stuff) {
        console.log(stuff);
        return next();
    }
})




module.exports = router;