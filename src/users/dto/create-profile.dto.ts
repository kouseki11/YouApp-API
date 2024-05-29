import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProfileDto {
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    readonly fullName: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    readonly username: string;

    @IsOptional()
    @IsString()
    @ApiProperty()
    readonly horoscope?: string;

    @IsOptional()
    @IsString()
    @ApiProperty()
    readonly zodiac?: string;

    @IsOptional()
    @IsString()
    @ApiProperty()
    readonly profilePictureUrl?: string;
}
