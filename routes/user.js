const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/', async (req, res) =>{
    try{
        const users = await User.find();
        res.json(users);
    }catch(err){
        res.json({message : err})
    }
});

router.post('/', async (req, res)=>{
    try{
        const user = await User.create(req.body);
        console.log(req.body);
        return res.send({user});
    }catch(err){
        return res.status(400).send({error: 'User registration failed...'});
    }
});
module.exports = router;