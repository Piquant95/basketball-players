const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('players/index.ejs')
});

module.exports = router;