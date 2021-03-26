require('dotenv').config();
const express = require('express'),
      userCtrl = require('./controllers/user'),
      postCtrl = require('./controllers/posts');
const session = require('express-session');
const massive = require('massive');
      
const app = express();

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;


app.use(express.json());
app.use(session ({
    resave: true,
    saveUninitialized: false,
    secret: SESSION_SECRET,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
})
);

//Auth Endpoints
app.post('/api/auth/register', userCtrl.register);
app.post('/api/auth/login', userCtrl.login);
app.get('/api/auth/me', userCtrl.getUser);
app.post('/api/auth/logout', userCtrl.logout);

//Post Endpoints
app.get('/api/posts', postCtrl.readPosts);
app.post('/api/post', postCtrl.createPost);
app.get('/api/post/:id', postCtrl.readPost);
app.delete('/api/post/:id', postCtrl.deletePost)

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
    }) //so this is technically the end of the massive method. the .then() promise is declared right outside the massive inv. that made my server start up anyway.
    .then(db => {
        app.set('db', db);
        app.listen(SERVER_PORT, () => console.log(` DB up & server running on ${SERVER_PORT}`));
    })
    .catch(err => console.log(err))
