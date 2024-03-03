import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { MissingReport } from '../missing-report/missing-report.entity';

@Entity()
export class MissingReportImage {
  @PrimaryGeneratedColumn()
  idx: number;

  @Column('varchar', { length: 300 })
  src: string;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  modifiedDate: Date;

  @ManyToOne(() => MissingReport, (missingReport) => missingReport.images)
  missingReport: MissingReport;
}
