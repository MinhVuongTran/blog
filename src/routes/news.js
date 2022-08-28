import express from "express";
import { NewsController } from "../app/controllers/NewsController.js";

const newsRouter = express.Router();
const newsController = new NewsController();

newsRouter.use("/:slug", newsController.show);
newsRouter.use("/", newsController.index);

export { newsRouter };
