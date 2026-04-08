import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    create(user: Partial<User>): Promise<User>;
    findOne(username: string): Promise<User | null>;
}
