const express = require('express');
const dishRouter = express.Router();
const Dishes = require('./dishHelper');

dishRouter.get('/', (req,res) => {
 //res.status(200).json({message : "you have reached the dishRouter at /dishes"})
    Dishes.getDishes()
            .then( dishes => {
                res.status(200).json(dishes);
            })
            .catch( err => {
                res.status(500).json(err.message);
            })
})



module.exports = dishRouter;