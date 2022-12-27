import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { student } from './student';

@Entity({ name: 'student_posts' })
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @ManyToOne(() => student, (student) => student.posts)
  student: student;
}
