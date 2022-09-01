import express from "express";
import { CourseController } from "../app/controllers/CourseController.js";

const coursesRouter = express.Router();
const courseController = new CourseController();

coursesRouter.get("/create", courseController.create);
coursesRouter.post("/store", courseController.store);
coursesRouter.get("/:id/edit", courseController.edit);
coursesRouter.put("/:id", courseController.update);
coursesRouter.get("/:slug", courseController.show);

export { coursesRouter };
