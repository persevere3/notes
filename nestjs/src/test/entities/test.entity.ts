import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, Generated} from 'typeorm'

@Entity()
export class Test{
  
  @PrimaryGeneratedColumn("uuid")
  id:number

  @Column({type: "varchar", length: 255})
  name:string

  @Column({type: "int"})
  age:number

  @CreateDateColumn({type: "timestamp"})
  entryTime: Date
}