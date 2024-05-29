import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ChatService } from './chat.service';
import { ChatController } from './chat.controller';
import { ChatGateway } from './chat.gateway';
import { Message, MessageSchema } from './schemas/message.schema';
import { RabbitMQModule } from '../rabbitmq/rabbitmq.module';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Message.name, schema: MessageSchema },
        ]),
        RabbitMQModule,
    ],
    providers: [ChatService, ChatGateway],
    controllers: [ChatController],
})
export class ChatModule { }
