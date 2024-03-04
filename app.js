const express = require('express')
const morgan = require('morgan')
const mysql = require('mysql2');
const blogRoutes = require('./routes/blogroutes')
const app = express();




const pool = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root123',
    database: 'sql_blog'
})




pool.connect((err) => {
    if (err) {
        console.log('Error connecting to MySQL:', err);
    } else {
        console.log('Connected to MySQL database');
        app.listen(3000, () => {
            console.log('Server is running on http://localhost:3000');
        });
    }
}); 

app.locals.pool = pool;






app.set('view engine', 'ejs');


app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
});



app.get('/', (req, res) => {
    res.redirect('/blogs')
})

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' })
})

//blogs
app.use('/blogs', blogRoutes)

app.use((req, res) => {
    res.status(404).render('404', { title: '404' })
})

