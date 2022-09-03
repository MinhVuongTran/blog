import express from 'express';
import { engine } from 'express-handlebars';
import morgan from 'morgan';
const path = require('path');
// import { fileURLToPath } from "url";
// import path, { dirname } from "path"
const methodOverride = require('method-override');

import route from './routes/index.js';
import { connect } from './config/db/index.js';

// Connect to db
const db = connect();

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

// HTTP Logger
// app.use(morgan("combined"));

// Template engine
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
        encoding: 'utf8',
        helpers: {
            sum: (a, b) => a + b,
        },
    })
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Routes init
route(app);

app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`);
});
