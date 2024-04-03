import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Schedule } from '../schedule/schedule.entity';
import { ScheduleAlarmStatus } from './schedule-alarm.constant';

@Entity()
export class ScheduleAlarm {
  @PrimaryGeneratedColumn()
  idx: number;

  @Column('time')
  time: string;

  @Column('enum', { enum: ScheduleAlarmStatus, default: ScheduleAlarmStatus.Activated })
  status: ScheduleAlarmStatus;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  modifiedDate: Date;

  @ManyToOne(() => Schedule, (schedule) => schedule.alarms)
  schedule: Schedule;
}
