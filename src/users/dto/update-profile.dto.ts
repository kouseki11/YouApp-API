import { IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateProfileDto {
    @IsOptional()
    @IsString()
    @ApiProperty()
    readonly fullName?: string;

    @IsOptional()
    @IsString()
    @ApiProperty()
    readonly username?: string;

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
