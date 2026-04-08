import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  username!: string;

  @Exclude()
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

  @Column({ default: false })
  isDeleted!: boolean;

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

  @Exclude()
  @DeleteDateColumn()
  deletedAt?: Date;

  @Exclude()
  @Column({ nullable: true })
  createdById?: number;

  @Exclude()
  @ManyToOne(() => User)
  @JoinColumn({ name: 'createdById' })
  createdBy?: User;

  @Exclude()
  @Column({ nullable: true })
  updatedById?: number;

  @Exclude()
  @ManyToOne(() => User)
  @JoinColumn({ name: 'updatedById' })
  updatedBy?: User;

  @Exclude()
  @Column({ nullable: true })
  deletedById?: number;

  @Exclude()
  @ManyToOne(() => User)
  @JoinColumn({ name: 'deletedById' })
  deletedBy?: User;
}
