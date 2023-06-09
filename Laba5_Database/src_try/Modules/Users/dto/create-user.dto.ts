import { IsNotEmpty, IsString, Length } from "class-validator";

export class CreateUserDto{
      @IsString()
      @IsNotEmpty()
      @Length(1, 30)
      name = "";

      @IsString()
      @IsNotEmpty()
      @Length(5, 50)
      username = "";
}  