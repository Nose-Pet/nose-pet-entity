import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { MissingReportStatus, MissingReportType } from './missing-report.constant';
import { MissingReportImage } from '../missing-report-image/missing-report-image.entity';
import { User } from '../user/user.entity';
import { Pet } from '../pet/pet.entity';
import { PetType } from '../pet-type/pet-type.entity';

@Entity()
export class MissingReport {
  @PrimaryGeneratedColumn()
  idx: number;

  @Column('enum', { enum: MissingReportType })
  type: MissingReportType;

  @Column('enum', { enum: MissingReportStatus, default: MissingReportStatus.Activated })
  status: MissingReportStatus;

  @Column('varchar', { length: 100 })
  title: string;

  @Column('text')
  content: string;

  @Column('text')
  missingPlace: string;

  @Column('text')
  missingDate: String;

  @Column('text')
  memo: string;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  modifiedDate: Date;

  @ManyToOne(() => User, (user) => user.missingReports)
  writer: User;

  @ManyToOne(() => Pet, (pet) => pet.missingReports, { nullable: true })
  pet: Pet;

  @ManyToOne(() => PetType, (petType) => petType.missingReports, { nullable: true })
  petType: PetType;

  @OneToMany(() => MissingReportImage, (missingReportImage) => missingReportImage.missingReport)
  images: MissingReportImage[];
}
