const config = require('config');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
//const db=require('./db.js');
const lookup=require('./listlookup.js');
const genres = require('./routes/genres');
const customers = require('./routes/customers');
const movies = require('./routes/movies');
const rentals = require('./routes/rentals');
const users = require('./routes/users');
const reward = require('./routes/reward');
//const users = require('./routes/users');
const tempuser = require('./routes/tempuser');

const courses = require('./routes/course');
const topic = require('./routes/topic');
const subjects = require('./routes/subject');
const listcourse = require('./routes/listcourse');
const auth = require('./routes/auth');
const express = require('express');
const app = express();

/*if (!config.get('jwtPrivateKey')) {
  console.error('FATAL ERROR: jwtPrivateKey is not defined.');
  process.exit(1);
}*/


app.use(express.json());
app.use('/api/genres', genres);
app.use('/api/customers', customers);
app.use('/api/movies', movies);
app.use('/api/rentals', rentals);
app.use('/api/create_course', courses);
app.use('/api/create_topic', topic);
app.use('/api/list_topic', topic);
app.use('/api/create_user', users);
app.use('/api/create_subject', subjects);
app.use('/api/list_course', courses);
app.use('/api/create_reward', reward);
app.use('/api/', reward);
app.use('/api/', courses);
app.use('/api/', users);
app.use('/api/', lookup);
app.use('/api/', tempuser);
app.use('/api/list_subject', subjects);
app.use('/api/list_common_course', listcourse);

app.use('/api/users', users);
app.use('/api/auth', auth);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));