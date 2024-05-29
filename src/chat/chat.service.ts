import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Message, MessageDocument } from './schemas/message.schema';
import { SendMessageDto } from './dto/send-message.dto';
import { RabbitMQService } from '../rabbitmq/rabbitmq.service';

@Injectable()
export class ChatService {
    constructor(
        @InjectModel(Message.name) private messageModel: Model<Message>,
        private rabbitMQService: RabbitMQService,
    ) { }

    async sendMessage(userId: string, sendMessageDto: SendMessageDto): Promise<Message> {
        const { content } = sendMessageDto;
        const message = new this.messageModel({ userId, content });
        await message.save();

        this.rabbitMQService.sendMessage('chat_messages', message);

        return message;
    }

    async viewMessages() {
        return this.messageModel.find().exec();
    }
}
