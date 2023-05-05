const express = require('express');
const router = express.Router();

router.all('/', (req, res) => {
    res.redirect("/cars");
})

module.exports = router;