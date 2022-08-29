import mongoose from "mongoose";
import { Course } from "../models/Course.js";
import { mongooseToObject } from "../../util/mongoose.js";

const course = mongoose.model("Course", Course);
export class CourseController {
    // [GET] /search/:slug
    show(req, res) {
        course.findOne({ slug: req.params.slug })
        .then((course) => {
            res.render("courses/show", {
                course: mongooseToObject(course),
            });
        });
    }
}
