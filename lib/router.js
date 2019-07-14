'use strict'

const express = require('express');
const router = express.Router();
let db = [];

// Route to Get All Categories
router.get('/categories', (req, res, next) => {
    console.log(req.path)
    let count = db.length;
    let results = db;
    res.json({ count, results });
});

// Route to Get One Category
router.get('/categories/:id', (req, res, next) => {
    let idx = req.path.split('/')[3];
    console.log(db[idx])
    let results = db[idx];
    res.json({ results })
})

// Route to Create a Category
router.post('/categories', (req, res, next) => {
    console.log(req.body)
    let item = req.body;
    db.push(item);
    res.send(db[db.length - 1]);
})

// Route to Delete a Category

router.delete('/categories/:id', (req, res, next) => {
    let idx = req.path.split('/')[3];
    res.send(db.splice(idx, 1))
})

// Route to Update a Category
router.put('/categories/:id', (req, res, next) => {
    let idx = req.path.split('/')[3];
    res.send(db[idx] = req.body)
})

router.get('*', (req, res, next) => {
    res.status(404).send('404 page not found')
})

module.exports = router
