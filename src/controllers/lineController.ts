export class LineController {
    public handleWebhook(req: any, res: any): void {

        console.log(req.body);

        const events = req.body.events;
        if (events && events.length > 0) {
            events.forEach((event: any) => {
                // Process each event
                console.log(event);
                // Add logic to handle different types of events
            });
        }
        res.status(200).send('OK');
    }
}