import { Client, WebhookEvent } from '@line/bot-sdk';
import dotenv from 'dotenv';

dotenv.config();

export class LineController {
    private lineClient: Client;

    constructor() {
        this.lineClient = new Client({
            channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN || '',
        });
    }

    public async handleWebhook(req: any, res: any): Promise<void> {

        const destination = req.body.destination;

        console.log('Received webhook from LINE:', destination);

        const events = req.body.events;
        if (events && events.length > 0) {
            await Promise.all(
                events.map(async (event: WebhookEvent) => {
                    console.log('handling event:', event);
                    if (event.type === 'message' && event.message.type === 'text') {
                        const replyToken = event.replyToken;
                        const userMessage = event.message.text;

                        // Echo the user's message back
                        await this.lineClient.replyMessage(replyToken, {
                            type: 'text',
                            text: `You said: ${userMessage}`,
                        });
                    }
                })
            );
        }

        res.status(200).send('OK');
    }
}