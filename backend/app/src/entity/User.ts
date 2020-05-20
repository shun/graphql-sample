import {Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column, OneToMany} from "typeorm";

//@Entity({synchronize: false})
@Entity({synchronize: true})
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "varchar",
    length: 20,
    nullable: false,
    comment: ""
  })
  firstname: string;

  @Column({
    type: "varchar",
    length: 20,
    nullable: false,
    comment: ""
  })
  lastname: string;

  @Column({
    type: "char",
    length: 254,
    nullable: false,
    unique: true,
    comment: ""
  })
  mail: string;

  @Column({
    type: "boolean",
    nullable: false,
    default: "0",
    comment: ""
  })
  delflg: boolean;

  @Column({
    type: "datetime",
    nullable: false,
    default: () => "CURRENT_TIMESTAMP",
    comment: ""
  })
  created_at: Date;

  @Column({
    type: "datetime",
    nullable: false,
    default: () => "CURRENT_TIMESTAMP",
    comment: ""
  })
  updated_at: Date;

}
