import { Router } from 'express';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

routes.get('/', (req, res) => {
  return res.send('Ok');
});

routes.post('/session', SessionController.store);

export default routes;
