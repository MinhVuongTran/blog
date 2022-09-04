import express from 'express';
import { engine } from 'express-handlebars';
import morgan from 'morgan';
const path = require('path');
// import { fileURLToPath } from "url";
// import path, { dirname } from "path"
const methodOverride = require('method-override');

import route from './routes/index.js';
import { connect } from './config/db/index.js';
import sortMiddleware from './app/middlewares/SortMiddleware';

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

// Custom middleware
app.use(sortMiddleware);

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
            sortTable: (fieldName, sort) => {
                const sortType = fieldName === sort.column ? sort.type : 'default';

                const icons = {
                    default: 'bi bi-filter',
                    asc: 'bi bi-sort-up',
                    desc: 'bi bi-sort-down',
                };

                const types = {
                    default: 'desc',
                    asc: 'desc',
                    desc: 'asc',
                };

                const icon = icons[sortType];
                const type = types[sortType];

                return `<a href="?_sort&column=${fieldName}&type=${type}" class="btn text-primary p-0 fs-4">
                            <i class="${icon}"></i>
                        </a>`;
            },
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
