import { Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Pet } from '../pet/pet.entity';

@Entity()
export class PetNosePrint {
  @PrimaryGeneratedColumn()
  idx: number;

  @OneToOne(() => Pet, (pet) => pet.petNosePrint)
  pet: Pet;
}
