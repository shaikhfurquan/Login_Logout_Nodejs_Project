import express from 'express';
const router = express.Router();

router.get('/home', (req, res) => {
    res.render('home')
})

router.get('/login', (req, res) => {
    res.render('login')
})

router.get('/add', (req, res) => {
    res.render('add')
})


export default router