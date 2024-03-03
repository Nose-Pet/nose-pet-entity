import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { PetGender, PetStatus } from './pet.constant';
import { UserPetGroup } from '../user-pet-group/user-pet-group.entity';
import { User } from '../user/user.entity';
import { PetType } from '../pet-type/pet-type.entity';
import { PetNosePrint } from '../pet-nose-print/pet-nose-print.entity';
import { PetSchedule } from '../pet-schedule/pet-schedule.entity';

@Entity()
export class Pet {
  @PrimaryGeneratedColumn()
  idx: number;

  @Column('varchar', { length: 15 })
  name: string;

  @Column('enum', { enum: PetGender })
  gender: PetGender;

  @Column('boolean', { default: false })
  isNeutered: boolean;

  @Column('date')
  birth: Date;

  @Column('varchar', { length: 300, nullable: true })
  image: string;

  @Column('enum', { enum: PetStatus, default: PetStatus.Activated })
  status: PetStatus;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  modifiedDate: Date;

  @ManyToOne(() => UserPetGroup, (userPetGroup) => userPetGroup.pets)
  userPetGroup: UserPetGroup;

  @ManyToOne(() => User, (user) => user.pets)
  creator: User;

  @ManyToOne(() => PetType, (petType) => petType.pets)
  petType: PetType;

  @OneToOne(() => PetNosePrint, (petNosePrint) => petNosePrint.pet, { nullable: true })
  @JoinColumn()
  petNosePrint: PetNosePrint;

  @OneToMany(() => PetSchedule, (petSchedule) => petSchedule.pet)
  petSchedules: PetSchedule[];
}
