import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { TokenStatus, TokenType } from './token.constant';
import { User } from '../user/user.entity';

@Entity()
export class Token {
  @PrimaryGeneratedColumn()
  idx: number;

  @Column('enum', { enum: TokenStatus, default: TokenStatus.Activated })
  status: TokenStatus;

  @Column('enum', { enum: TokenType })
  type: TokenType;

  @Column('varchar', { length: 500 })
  content: string;

  @Column('datetime')
  expiredDate: Date;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  modifiedDate: Date;

  @ManyToOne(() => User, (user) => user.tokens)
  user: User;
}
