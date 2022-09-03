import express from 'express';
import { SiteController } from '../app/controllers/SiteController.js';

const siteRouter = express.Router();
const siteController = new SiteController();

siteRouter.get('/search', siteController.search);
siteRouter.get('/', siteController.index);

export { siteRouter };
