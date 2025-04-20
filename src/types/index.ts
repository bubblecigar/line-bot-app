export interface WebhookEvent {
    type: string;
    replyToken: string;
    source: {
        userId: string;
        type: string;
    };
    timestamp: number;
    message?: Message;
}

export interface Message {
    type: string;
    id: string;
    text?: string;
    originalContentUrl?: string;
    previewImageUrl?: string;
}