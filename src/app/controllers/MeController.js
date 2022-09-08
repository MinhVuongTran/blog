import mongoose from 'mongoose';

import { Course } from '../models/Course.js';
import { multipleMongooseToObject } from '../../util/mongoose.js';

const course = mongoose.model('Course', Course);
export class MeController {
    // [GET] /me/stored/courses
    storedCourses(req, res, next) {
        Promise.all([course.find({}).sortable(req), course.countDocumentsDeleted()])
            .then(([courses, deletedCount]) => {
                res.render('me/stored-courses', {
                    deletedCount,
                    courses: multipleMongooseToObject(courses),
                });
            })
            .catch(next);

        // course
        //     .countDocumentsDeleted()
        //     .then((deletedCount) => {
        //         console.log(deletedCount);
        //     })
        //     .catch(() => {});

        // course
        //     .find()
        //     .then((courses) =>
        //         res.render("me/stored-courses", {
        //             courses: multipleMongooseToObject(courses),
        //         })
        //     )
        //     .catch(next);
    }

    // [GET] /me/trash/courses
    trashCourses(req, res, next) {
        course
            .findDeleted({})
            .then((courses) =>
                res.render('me/trash-courses', {
                    courses: multipleMongooseToObject(courses),
                })
            )
            .catch(next);
    }
}
