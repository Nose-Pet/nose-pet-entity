import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { SchedulePeriodType } from './schedule-period-setting.constant';
import { Schedule } from '../schedule/schedule.entity';

@Entity()
export class SchedulePeriodSetting {
  @PrimaryGeneratedColumn()
  idx: number;

  @Column('enum', { enum: SchedulePeriodType })
  type: SchedulePeriodType;

  @Column('datetime')
  endDate: Date;

  @ManyToOne(() => Schedule, (schedule) => schedule.schedulePeriodSettings)
  schedule: Schedule;
}
