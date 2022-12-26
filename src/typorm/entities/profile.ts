import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'student_profiles' })
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  class: number;

  @Column()
  dob: string;
}
