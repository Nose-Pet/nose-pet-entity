import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Schedule } from '../schedule/schedule.entity';

@Entity()
export class ScheduleVitamin {
  @PrimaryGeneratedColumn()
  idx: number;

  @Column('varchar', { length: 100 })
  name: string;

  @Column('int')
  amount: number;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  modifiedDate: Date;

  @ManyToOne(() => Schedule, (schedule) => schedule.scheduleVitamins)
  schedule: Schedule;
}
