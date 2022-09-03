import express from "express";
import { CourseController } from "../app/controllers/CourseController.js";

const coursesRouter = express.Router();
const courseController = new CourseController();

coursesRouter.get("/create", courseController.create);
coursesRouter.post("/store", courseController.store);
coursesRouter.post("/handle-form-actions", courseController.handleFormActions);
coursesRouter.get("/:id/edit", courseController.edit);
coursesRouter.put("/:id", courseController.update);
coursesRouter.patch("/:id/restore", courseController.restore);
coursesRouter.delete("/:id", courseController.delete);
coursesRouter.delete("/:id/force", courseController.forceDelete);
coursesRouter.get("/:slug", courseController.show);

export { coursesRouter };
