const express = require('express');
const router = express.Router();
const User = require('../model/schema');

router.get('/info', async(req,res)=>{
    try{
        const size = Number(req.query.size);
        const skip = Number(req.query.page);
        const data = await User.find({}).limit(size).skip(size*skip);
        res.status(200).json(data);

    } catch(err){
        console.log(err);
        res.status(500).json(err);
    }

});


module.exports = router;