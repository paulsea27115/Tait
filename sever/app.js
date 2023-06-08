const express = require('express');
const app = express();

app.get('/main', (req, res) => {
    res.send('here is main page');
});

app.get('/login', (req, res) => {
    res.send('here is login page');
});

app.get('/signUp', (req, res) => {
    res.send('here is Sign Up page');
});

app.get('/myPage', (req, res) => {
    res.send('here is myPage page');
});

app.get('/board', (req, res) => {
    res.send('here is board page');
});

app.listen(3000, (req, res) => {
    console.log('listening');
});