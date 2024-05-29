import { Controller, Get, Post, Put, Body, Request, UseGuards, Param } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { UsersService } from './users.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ApiTags, ApiBearerAuth, ApiBody, ApiResponse } from '@nestjs/swagger';

@ApiTags('users')
@ApiBearerAuth()
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @UseGuards(JwtAuthGuard)
    @Post('createProfile')
    @ApiBody({ type: CreateProfileDto })
    @ApiResponse({ status: 201, description: 'Profile created successfully.' })
    async createProfile(@Request() req, @Body() createProfileDto: CreateProfileDto) {
        return this.usersService.createProfile(req.user.userId, createProfileDto);
    }

    @UseGuards(JwtAuthGuard)
    @Get('getProfile')
    @ApiResponse({ status: 200, description: 'Profile retrieved successfully.' })
    async getProfile(@Request() req) {
        return this.usersService.getProfile(req.user.userId);
    }

    @UseGuards(JwtAuthGuard)
    @Put('updateProfile')
    @ApiBody({ type: UpdateProfileDto })
    @ApiResponse({ status: 200, description: 'Profile updated successfully.' })
    async updateProfile(@Request() req, @Body() updateProfileDto: UpdateProfileDto) {
        return this.usersService.updateProfile(req.user.userId, updateProfileDto);
    }
}
