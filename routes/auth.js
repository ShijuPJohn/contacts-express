const express = require("express");
const router = express.Router();

router.get('/', ((req, res) => {
    res.send('registered a user')
}))


router.get('/', ((req, res) => {
    res.send('Login user')
}))

module.exports = router;