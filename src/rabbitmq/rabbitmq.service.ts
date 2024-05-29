import { Injectable } from '@nestjs/common';
import * as amqp from 'amqplib/callback_api';

@Injectable()
export class RabbitMQService {
    private channel: amqp.Channel;

    constructor() {
        this.connect();
    }

    private connect() {
        amqp.connect(process.env.RABBITMQ_URI, (error0, connection) => {
            if (error0) {
                throw error0;
            }
            connection.createChannel((error1, channel) => {
                if (error1) {
                    throw error1;
                }
                this.channel = channel;
            });
        });
    }

    sendMessage(queue: string, message: any) {
        this.channel.assertQueue(queue, {
            durable: false,
        });
        this.channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)));
    }
}
