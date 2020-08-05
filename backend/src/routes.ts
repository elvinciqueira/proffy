import { Router, Request, Response } from 'express';

import ClassesController from './controllers/ClassesController';
import { ConnectionsController } from './controllers/ConnectionsController';

const classesController = new ClassesController();
const connectionsController = new ConnectionsController();

const routes = Router();

routes.post('/classes', classesController.create);
routes.get('/classes', classesController.create);

routes.post('/connections', connectionsController.create);
routes.get('/connections', connectionsController.index);

export default routes;
