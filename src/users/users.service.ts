import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { RegisterDto } from 'src/auth/dto/register.dto';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) { }

    async create(registerDto: RegisterDto): Promise<User> {
        const createdUser = new this.userModel(registerDto);
        return createdUser.save();
    }

    findUserById(userId: string): Promise<User> {
        return this.userModel.findById(userId).exec();
    }

    async findOneByEmail(email: string): Promise<User | undefined> {
        return this.userModel.findOne({ email }).exec();
    }

    async createProfile(userId: string, createProfileDto: CreateProfileDto): Promise<User> {
        return this.userModel.findByIdAndUpdate(userId, createProfileDto, { new: true }).exec();
    }

    async getProfile(userId: string): Promise<User> {
        return this.userModel.findById(userId).exec();
    }

    async updateProfile(userId: string, updateProfileDto: UpdateProfileDto): Promise<User> {
        return this.userModel.findByIdAndUpdate(userId, updateProfileDto, { new: true }).exec();
    }
}
