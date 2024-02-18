import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { UserPetGroupStatus } from './user-pet-group.constant';
import { User } from '../user/user.entity';
import { Pet } from '../pet/pet.entity';

@Entity()
export class UserPetGroup {
  @PrimaryGeneratedColumn()
  idx: number;

  @Column('varchar', { length: 30 })
  name: string;

  @Column('enum', { enum: UserPetGroupStatus, default: UserPetGroupStatus.Activated })
  status: UserPetGroupStatus;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  modifiedDate: Date;

  @OneToMany(() => User, (user) => user.userPetGroup)
  users: User[];

  @OneToMany(() => Pet, (pet) => pet.userPetGroup)
  pets: Pet[];
}
