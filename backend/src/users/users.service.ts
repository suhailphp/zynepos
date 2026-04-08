import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(user: Partial<User>, creatorId: number): Promise<User> {
    if (!user.password) {
      throw new BadRequestException('Password is required');
    }
    const salt = await bcrypt.genSalt();
    user.password = await bcrypt.hash(user.password, salt);

    const newUser = this.usersRepository.create({
      ...user,
      createdById: creatorId,
      updatedById: creatorId,
    });
    return this.usersRepository.save(newUser);
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findOne(username: string): Promise<User | null> {
    return this.usersRepository.findOne({ where: { username } });
  }

  async findOneById(id: number): Promise<User | null> {
    return this.usersRepository.findOne({ where: { id } });
  }

  async update(
    id: number,
    updateUserDto: UpdateUserDto,
    editorId: number,
  ): Promise<User> {
    const user = await this.findOneById(id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    if (updateUserDto.password) {
      const salt = await bcrypt.genSalt();
      updateUserDto.password = await bcrypt.hash(updateUserDto.password, salt);
    }

    Object.assign(user, updateUserDto);
    user.updatedById = editorId;

    return this.usersRepository.save(user);
  }

  async remove(id: number, editorId: number): Promise<void> {
    const user = await this.findOneById(id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    user.isActive = false;
    user.deletedAt = new Date();
    user.deletedById = editorId;
    user.updatedById = editorId;

    await this.usersRepository.save(user);
  }
}
