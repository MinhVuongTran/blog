import mongoose from "mongoose";
import { Course } from "../models/Course.js";
import { mongooseToObject } from "../../util/mongoose.js";

const course = mongoose.model("Course", Course);
export class CourseController {
    // [GET] /search/:slug
    show(req, res, next) {
        course
            .findOne({ slug: req.params.slug })
            .then((course) => {
                res.render("courses/show", {
                    course: mongooseToObject(course),
                });
            })
            .catch(next);
    }

    // [GET] /search/create
    create(req, res, next) {
        res.render("courses/create");
    }

    // [POST] /search/store
    store(req, res, next) {
        // res.json(req.body);
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const COURSE = new course(req.body);
        COURSE.save()
            .then(() => res.redirect("/"))
            .catch((error) => {});
    }
}
