import { Controller, Post, Body, Request, UseGuards, Get } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { ChatService } from './chat.service';
import { SendMessageDto } from './dto/send-message.dto';
import { ApiTags, ApiBearerAuth, ApiBody, ApiResponse } from '@nestjs/swagger';

@ApiTags('chat')
@ApiBearerAuth()
@Controller('chat')
export class ChatController {
    constructor(private readonly chatService: ChatService) { }

    @UseGuards(JwtAuthGuard)
    @Post('sendMessage')
    @ApiBody({ type: SendMessageDto })
    @ApiResponse({ status: 201, description: 'Message sent successfully.' })
    async sendMessage(@Request() req, @Body() sendMessageDto: SendMessageDto) {
        return this.chatService.sendMessage(req.user.userId, sendMessageDto);
    }

    @UseGuards(JwtAuthGuard)
    @Get('viewMessages')
    @ApiResponse({ status: 200, description: 'Messages retrieved successfully.' })
    async viewMessages() {
        return this.chatService.viewMessages();
    }
}
