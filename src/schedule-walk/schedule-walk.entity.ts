import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Schedule } from '../schedule/schedule.entity';

@Entity()
export class ScheduleWalk {
  @PrimaryGeneratedColumn()
  idx: number;

  @Column('varchar', { length: 10 })
  totalTime: string;

  @Column('int')
  totalDistance: number;

  @Column('json', { nullable: true })
  coordinates: any;

  @Column('datetime')
  startDate: Date;

  @Column('datetime')
  endDate: Date;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  modifiedDate: Date;

  @ManyToOne(() => Schedule, (schedule) => schedule.scheduleWalks)
  schedule: Schedule;
}
