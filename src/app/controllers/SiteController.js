import mongoose from "mongoose";
import { Course } from "../models/Course.js";
const course = mongoose.model("Course", Course);
export class SiteController {
    // [GET] /
    index(req, res) {
        course.find({}, (err, courses) => {
            if (!err) {
                res.json(courses);
            } else {
                res.status(400).json({
                    error: "error",
                });
            }
        });
        // res.render("home");
    }

    // [GET] /search
    search(req, res) {
        res.render("Search");
    }
}
