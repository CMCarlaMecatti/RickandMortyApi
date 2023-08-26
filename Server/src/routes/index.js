const {login} = require('../controllers/login');
const {getChartById} = require('../controllers/getChartById');
const {postFav}= require('../controllers/postFav');
const {postUser}=require('../controllers/postUser');
const{deleteFav}= require('../controllers/deleteFav');


const express= require('express');
const router = express.Router();




router.get('/character/:id', (req, res)=>{
    getChartById(req, res);
});

router.get('/login', (req, res)=>{
     login(req,res);
});

router.post('/login', (req, res)=>{
    postUser(req,res);
})

router.post('/fav', (req, res)=>{
     postFav(req,res);
})

router.delete('/fav/:id', (req, res)=>{
    deleteFav(req,res);
})


module.exports= {router};
