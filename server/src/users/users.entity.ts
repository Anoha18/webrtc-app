import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class UsersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  firstname: string;

  @Column()
  lastname: string;

  @Column({ nullable: false, unique: true })
  login: string;

  @Column({ nullable: false })
  password: string;

  @CreateDateColumn({ type: 'timestamp', default: () => 'current_timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'current_timestamp', onUpdate: 'current_timestamp' })
  updated_at: Date
};
