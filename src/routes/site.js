import express from "express";
import { SiteController } from "../app/controllers/SiteController.js";

const siteRouter = express.Router();
const siteController = new SiteController();

siteRouter.use("/search", siteController.search);
siteRouter.use("/", siteController.index);

export { siteRouter };
