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

    private async _handleTextMessage(
        replyToken: string,
        userMessage: string,
    ) {
        // Echo the user's message back
        await this.lineClient.replyMessage(
            replyToken,
            {
                type: 'text',
                text: `You said: ${userMessage}`,
            }
        );
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
                        await this._handleTextMessage(
                            event.replyToken,
                            event.message.text,
                        );
                    }
                })
            );
        }

        res.status(200).send('OK');
    }
}