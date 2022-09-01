import mongoose from "mongoose";
import { Course } from "../models/Course.js";
import { multipleMongooseToObject } from "../../util/mongoose.js";

const course = mongoose.model("Course", Course);
export class MeController {
    // [GET] /me/stored/courses
    storedCourses(req, res, next) {
        course
            .find({})
            .then((courses) =>
                res.render("me/stored-courses", {
                    courses: multipleMongooseToObject(courses),
                })
            )
            .catch(next);
    }
    test(req, res, next) {
        res.send("test");
    }
}
