import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    readonly fullName: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    readonly username: string;

    @IsNotEmpty()
    @IsEmail()
    @ApiProperty()
    readonly email: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    @ApiProperty()
    readonly password: string;
}
