import { Controller, Get, Post, Put, Delete, Param } from "@nestjs/common";
import { User } from "./user.entity";
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController{
      constructor(private  usersService: UsersService){}

      @Get()
      async getAll(): Promise<User[]> {
           console.log(this.usersService)
           return this.usersService.getAll();
      }
  
      @Get(':id')
      async getOne(@Param() params: {id: string}): Promise<User | null> {
           return this.usersService.getById(params.id);
      }
}