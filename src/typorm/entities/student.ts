import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'students' })
export class student {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;
  @Column({ unique: true })
  name: string;
  @Column()
  age: number;
  @Column()
  phoneNumber: number;
  @Column()
  createdAt: Date;
  @Column({ nullable: true })
  address: string;
}
