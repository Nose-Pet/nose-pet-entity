import { Column, Entity, OneToMany, PrimaryColumn, Unique } from 'typeorm';
import { Pet } from '../pet/pet.entity';

@Entity()
@Unique(['name'])
export class PetType {
  @PrimaryColumn('integer')
  idx: number;

  @Column('varchar', { length: 50 })
  name: string;

  @OneToMany(() => Pet, (pet) => pet.petType)
  pets: Pet[];

  @OneToMany(() => Pet, (pet) => pet.petType)
  missingReports: Pet[];
}
