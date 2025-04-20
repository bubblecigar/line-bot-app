import { Router } from 'express';
import { LineController } from '../controllers/lineController';

const router = Router();
const lineController = new LineController();

// TODO: fix the app type
type appType = {
    use: (arg0: string, arg1: Router) => void;
}

export function setRoutes(app: appType) {
    app.use('/webhook', router);
    router.post('/', lineController.handleWebhook.bind(lineController));
}