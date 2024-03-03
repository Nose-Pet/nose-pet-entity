import { Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Pet } from '../pet/pet.entity';
import { Schedule } from '../schedule/schedule.entity';

@Entity()
export class PetSchedule {
  @PrimaryColumn()
  petIdx: number;

  @PrimaryColumn()
  scheduleIdx: number;

  @ManyToOne(() => Pet, (pet) => pet.petSchedules)
  pet: Pet;

  @ManyToOne(() => Schedule, (schedule) => schedule.petSchedules)
  schedule: Schedule;
}
