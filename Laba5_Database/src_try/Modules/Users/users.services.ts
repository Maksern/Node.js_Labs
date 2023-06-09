// import { CreateUserDto } from "./dto/create-user.dto";
// import { UsersRepository } from "./users.repository";

// export class UsersService {
//       constructor(
//             private readonly usersRepository: UsersRepository
//       ){}
//       createUser(dto: CreateUserDto){
//             return this.usersRepository.create(dto);
//       }
// }

import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository} from "typeorm";
import { UserEntity } from "./user.entity";

@Injectable()
export class UsersService{
      constructor(@InjectRepository(UserEntity)
            private readonly usersRepository: Repository<UserEntity>
      ) {}

      async getAll(): Promise<any> {
            return this.usersRepository.find();
      }

      async getById(id: string) {
            return this.usersRepository.findOne({
                  where:{id}
            });
      }
}

