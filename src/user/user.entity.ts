import { Column, CreateDateColumn, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { UserPetGroup } from '../user-pet-group/user-pet-group.entity';
import { UserStatus } from './user.constant';
import { Pet } from '../pet/pet.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  idx: number;

  @Column('varchar', { length: 50 })
  email: string;

  @Column('varchar', { length: 64 })
  password: string;

  @Column('varchar', { length: 10 })
  name: string;

  @Column('varchar', { length: 20 })
  nickname: string;

  @Column('enum', { enum: UserStatus, default: UserStatus.Activated })
  status: UserStatus;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  modifiedDate: Date;

  @ManyToOne(() => UserPetGroup, (userPetGroup) => userPetGroup.users)
  userPetGroup: UserPetGroup;

  @OneToOne(() => Pet, (pet) => pet.creator)
  pet: Pet;
}