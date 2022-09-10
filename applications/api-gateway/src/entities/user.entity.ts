import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
export enum EUserRole {
  admin = 'admin',
  user = 'user',
}

@Entity({ name: 'users' })
export class UserEtity {
  @PrimaryGeneratedColumn('uuid')
  uuid?: string;

  @Column({ type: 'varchar' })
  username?: string;

  @Column({ type: 'varchar' })
  firstName?: string;

  @Column({ type: 'varchar' })
  lastName?: string;

  @Column({ type: 'varchar' })
  email?: string;

  @Column({ type: 'enum', enum: EUserRole, default: EUserRole.user })
  role?: EUserRole;
}
