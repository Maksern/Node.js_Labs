import { Column,  Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: 'userss'})
export class UserEntity{
      @PrimaryGeneratedColumn('uuid')
      id = "";

      @Column({
            nullable: false,
            type: 'varchar',
            length: 30, 
      })
      name = "";

      @Column({
            nullable: true,
            type: 'varchar',
            length: 80,
      })
      username = "";
}