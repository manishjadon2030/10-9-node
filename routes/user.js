const express = require('express');
const router = express.Router();
const usercontroller = require('../controllers/usercontroller');

router.use(express.json());


router.get('/users',(req,res)=>{
     usercontroller.getAllUsers(req,res)
})
router.get('/users/:id',(req,res)=>{
    usercontroller.getParticularUser(req,res)
})

router.post('/add/user',(req,res)=>{
    usercontroller.addUser(req, res)
})


module.exports = router