import { Router } from 'express';
import CharacterController from './app/controllers/CharacterController';
import LogMiddleware from './app/middlewares/LogMiddleware';
import ComicController from './app/controllers/ComicController';

const routes = new Router();

routes.use(LogMiddleware.register);
routes.get('/', CharacterController.index);
routes.get('/character/:id', CharacterController.show);

routes.get('/comic/:id', ComicController.show);

export default routes;
