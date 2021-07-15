const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express()
const port = process.env.PORT || 3001

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('figures');
});

app.get('/descuento', (req, res) => {
    res.render('descuento', { title: 'curso practico de javascript' });
})

app.get('/promedio', (req, res) => {
    res.render('promedio', { title: 'curso practico de javascript' });
})

app.get('/salarios', (req, res) => {
    res.render('salarios', { title: 'curso practico de javascript' });
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})