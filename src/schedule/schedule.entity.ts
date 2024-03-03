import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { ScheduleStatus, ScheduleType } from './schedule.constant';
import { SchedulePeriodSetting } from '../schedule-period-setting/schedule-period-setting.entity';
import { User } from '../user/user.entity';
import { UserPetGroup } from '../user-pet-group/user-pet-group.entity';
import { ScheduleAlarm } from '../schedule-alarm/schedule-alarm.entity';
import { ScheduleVitamin } from '../schedule-vitamin/schedule-vitamin.entity';
import { ScheduleWalk } from '../schedule-walk/schedule-walk.entity';
import { PetSchedule } from '../pet-schedule/pet-schedule.entity';

@Entity()
export class Schedule {
  @PrimaryGeneratedColumn()
  idx: number;

  @Column('varchar', { length: 100 })
  title: string;

  @Column('varchar', { length: 500 })
  location: string;

  @Column('datetime')
  startDate: Date;

  @Column('datetime')
  endDate: Date;

  @Column('enum', { enum: ScheduleType })
  type: ScheduleType;

  @Column('enum', { enum: ScheduleStatus, default: ScheduleStatus.Activated })
  status: ScheduleStatus;

  @Column('text', { nullable: true })
  memo: string;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  modifiedDate: Date;

  @OneToMany(() => SchedulePeriodSetting, (schedulePeriodSetting) => schedulePeriodSetting.schedule)
  schedulePeriodSettings: SchedulePeriodSetting[];

  @ManyToOne(() => User, (user) => user.schedules)
  creator: User;

  @ManyToOne(() => UserPetGroup, (userPetGroup) => userPetGroup.schedules)
  userPetGroup: UserPetGroup;

  @OneToMany(() => ScheduleAlarm, (scheduleAlarm) => scheduleAlarm.schedule)
  alarms: ScheduleAlarm[];

  @OneToMany(() => ScheduleVitamin, (scheduleVitamin) => scheduleVitamin.schedule)
  scheduleVitamins: ScheduleVitamin[];

  @OneToMany(() => ScheduleWalk, (scheduleWalk) => scheduleWalk.schedule)
  scheduleWalks: ScheduleWalk[];

  @OneToMany(() => PetSchedule, (petSchedule) => petSchedule.schedule)
  petSchedules: PetSchedule[];
}
