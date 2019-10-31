const express = require('express');
const router = express.Router();
const Table = require('../models/Table'); 

router.get('/', async (req, res)=>{
    try{
        const table = await Table.find({});
        res.json(table);
    }catch(err){
        res.json({message : err})
    }
});

router.post('/', async (req, res)=>{
    try{
        const table = await Table.create(req.body);
        console.log(req.body);
        return res.send({table});
    }catch(err){
        return res.status(400).send({error: 'Registration failed...'});
    }    
});


module.exports = router;