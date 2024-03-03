import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { UserPetGroup } from '../user-pet-group/user-pet-group.entity';
import { UserStatus } from './user.constant';
import { Pet } from '../pet/pet.entity';
import { Schedule } from '../schedule/schedule.entity';
import { MissingReport } from '../missing-report/missing-report.entity';
import { Token } from '../token/token.entity';

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

  @OneToMany(() => Pet, (pet) => pet.creator)
  pets: Pet[];

  @OneToMany(() => Schedule, (schedule) => schedule.creator)
  schedules: Schedule[];

  @OneToMany(() => MissingReport, (missingReport) => missingReport.writer)
  missingReports: MissingReport[];

  @OneToMany(() => Token, (token) => token.user)
  tokens: Token[];
}
