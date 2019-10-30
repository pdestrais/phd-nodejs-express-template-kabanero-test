const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('test console.log');
    res.render('index', {
        msg: "Hello my new Express app build using Kabanero - new test!!!"
    });
});

module.exports = router;