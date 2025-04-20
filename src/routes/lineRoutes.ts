import { Router, Express } from 'express';
import { LineController } from '../controllers/lineController';

const router = Router();
const lineController = new LineController();

export function setRoutes(app: Express) {
    app.use('/webhook', router);
    router.post('/', lineController.handleWebhook.bind(lineController));
}