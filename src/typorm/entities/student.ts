import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Post } from './post';
import { Profile } from './profile';

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

  @OneToOne(() => Profile)
  @JoinColumn()
  profile: Profile;

  @OneToMany(() => Post, (post) => post.student)
  posts: Post[];
}
