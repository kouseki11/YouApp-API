import { PassportSerializer } from "@nestjs/passport";
import { Injectable } from "@nestjs/common";
import { UsersService } from "src/users/users.service";

@Injectable()
export class SessionSerializer extends PassportSerializer {
    constructor(private readonly usersService: UsersService) {
        super();
    }
    serializeUser(user: any, done: (err: Error, user: any) => void) {
        done(null, {email: user.email});
    }

    deserializeUser(payload: any, done: (err: Error, payload: any) => void) {
        const user = this.usersService.findOneByEmail(payload.email);
        done(null, payload);
    }
}