import express from "express";
import { CourseController } from "../app/controllers/CourseController.js";

const coursesRouter = express.Router();
const courseController = new CourseController();

coursesRouter.get("/:slug", courseController.show);

export { coursesRouter };
