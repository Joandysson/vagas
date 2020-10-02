import express from 'express';
import { DataController } from './controllers/dataController';
const routes = express.Router();
const dataController = new DataController();

routes.get('/', (req, res) => {
    res.send('API');
});

routes.get('/portal', dataController.porotal);
routes.get('/server', dataController.server);
routes.get('/year', dataController.year);
routes.get('/month', dataController.month);

export default routes;