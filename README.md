# Line Bot Application

This project is a simple LINE bot application built using TypeScript and Express. It serves as a starting point for developing LINE bots that can respond to user messages and events.

## Project Structure

```
line-bot-app
├── src
│   ├── app.ts                # Entry point of the application
│   ├── controllers
│   │   └── lineController.ts  # Handles incoming webhook events
│   ├── services
│   │   └── lineService.ts     # Logic for sending messages via LINE API
│   ├── routes
│   │   └── lineRoutes.ts      # Defines application routes
│   └── types
│       └── index.ts           # Type definitions for webhook events and messages
├── package.json               # npm configuration file
├── tsconfig.json              # TypeScript configuration file
└── README.md                  # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd line-bot-app
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Configure environment variables:**
   Create a `.env` file in the root directory and add your LINE bot credentials:
   ```
   CHANNEL_ACCESS_TOKEN=your_channel_access_token
   CHANNEL_SECRET=your_channel_secret
   ```

4. **Run the application:**
   ```
   npm start
   ```

5. **Test the application:**
   ```
   curl -X POST http://localhost:3000/webhook -H "Content-Type: application/json" -d '{"message": "Hello, LINE bot!"}'
   ```

6. **Test with line webhook:**
   ```
   Expose local endpoint:
   a. npm run start (at port 3000)
   b. ngrok http 3000
   c. get exposed URL (Forwarding [url] -> localhost 3000)

   Set the exposed URL as webhook endpoint:
   a. goto line developer console https://developers.line.biz/console/
   b. select application
   c. goto messaging api tab (https://developers.line.biz/console/channel/[channel ID]/messaging-api)
   d. set up expoed URL as webhook URL and enable the webhook option
   e. send a message in line
   f. check the server log
   ```

## Usage Examples

- To set up a webhook, configure your LINE bot settings to point to your server's endpoint.
- The bot will respond to incoming messages based on the logic defined in `lineController.ts` and `lineService.ts`.

## Contributing

Feel free to submit issues or pull requests to improve the functionality of this LINE bot application.