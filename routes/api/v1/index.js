//importing all the necessary files
const express=require('express');
const router=express.Router();

// Setting router path
router.use('/orders',require('./orders'));

// Exporting router
module.exports=router;