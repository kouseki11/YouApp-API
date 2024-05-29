import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
    @Prop({ required: true })
    fullName: string;

    @Prop({ required: true, unique: true })
    username: string;

    @Prop({ required: true, unique: true })
    email: string;

    @Prop({ required: true })
    password: string;

    @Prop()
    horoscope: string;

    @Prop()
    zodiac: string;

    @Prop()
    profilePictureUrl: string;
}

export type UserDocument = User & Document;

export const UserSchema = SchemaFactory.createForClass(User);
