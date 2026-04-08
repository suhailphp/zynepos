import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  username!: string;

  @Column()
  password?: string;

  @Column()
  fullName!: string;

  @Column({ unique: true, nullable: true })
  email!: string;

  @Column({ nullable: true })
  mobile!: string;

  @Column({ length: 4, nullable: true })
  pin!: string;

  @Column({ default: true })
  isActive!: boolean;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  hourlyRate!: number;

  @Column({ nullable: true })
  outletId!: number;

  @Column({ type: 'text', array: true, default: [] })
  permissions!: string[];

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @DeleteDateColumn()
  deletedAt?: Date;
}
