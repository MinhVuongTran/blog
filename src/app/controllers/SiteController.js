import mongoose from 'mongoose';
import { Course } from '../models/Course.js';
import { multipleMongooseToObject } from '../../util/mongoose.js';

const course = mongoose.model('Course', Course);
export class SiteController {
    // [GET] /
    index(req, res, next) {
        course
            .find({})
            .then((courses) => {
                res.render('home', {
                    // C1
                    courses: multipleMongooseToObject(courses),
                });
            })
            .catch(next);
        // res.render("home");
    }

    // [GET] /search
    search(req, res) {
        res.render('Search');
    }
}
