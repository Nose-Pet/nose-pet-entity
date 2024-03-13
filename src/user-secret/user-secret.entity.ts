import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class UserSecret {
  @PrimaryGeneratedColumn()
  idx: number;

  @Column('varchar', { length: 64 })
  encryptedPassword: string;

  @Column('varchar', { length: 32 })
  salt: string;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  modifiedDate: Date;

  @OneToOne(() => User, (user) => user.userSecret)
  @JoinColumn()
  user: User;
}
