const express = require("express");
const User = require("../models/User");
const {check, validationResult} = require("express-validator");
const {createUser} = require("../controllers/users");
const router = express.Router();
const bcrypt = require('bcryptjs')

router.post('/', [
    check('name', 'name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({min: 6})
], async (req, res) => {
    const error = validationResult(req)
    if (!error.isEmpty()) {
        return res.status(400).json({status: error.array()})
    }
    const {name, email, password} = req.body
    try {
        let user = await User.findOne({email})
        if (user) {
            return res.status(400).json({status: 'error', message: 'user already exists'})
        }
        user = new User({name, email, password});
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt)
        const response = await User.create(user)
        const payload =

        res.status(201).json({
            status: 'success',
            object: response
        })
    } catch (e) {
        res.status(400).json({
            status: 'failed',
            message: 'error'
        })
    }
})


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