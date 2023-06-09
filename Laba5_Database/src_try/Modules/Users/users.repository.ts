import { CreateUserDto } from "./dto/create-user.dto";
import { UserEntity } from "./user.entity";
import { Repository} from "typeorm";


class UsersRepository{
      constructor(
            private readonly userDao: Repository<UserEntity>,
      ) {}

      create(dto: CreateUserDto):  Promise<CreateUserDto>{
            // const user: UserEntity = { id: uuid.v4(), ...dto}
            // users.push(user);
            return this.userDao.save(dto);
      }
}
