const express = require("express");
const router = express.Router();

router.post('/', ((req, res) => {
    res.send('add a contact')
}))


router.get('/', ((req, res) => {
    res.send('get all contacts')
}))


router.put('/:id', ((req, res) => {
    res.send('update contact')
}))

router.delete('/:id', ((req, res) => {
    res.send('delete contact')
}))


module.exports = router;