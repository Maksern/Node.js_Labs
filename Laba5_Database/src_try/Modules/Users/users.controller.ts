// import { Router } from "express";
// import { validateReq } from './../../Shared/Middlewares/validate';
// import { serializeRes } from './../../Shared/Middlewares/serialize';
// import { CreateUserDto } from "./dto/create-user.dto";
// import { UserSerializer } from "./serializer/user.serializer";
// import { UsersService } from "./users.services";

// const router = Router();

// router.post("/", validateReq(CreateUserDto), (req, res) => {
//       const user = UsersService.createUser(req.body);
//       res.status(201).send(serializeRes(UserSerializer, user));
// })

// export const usersController = router;

import { Controller, Get, Post, Put, Delete, Param } from "@nestjs/common";
import { UsersService } from "./users.services";

@Controller('userss')
export class UsersController{
      constructor(private readonly usersService: UsersService){}

      @Get('/')
      async getAll(): Promise<any> {
           return this.usersService.getAll();
      }
  
      @Get('/:id')
      async getOne(@Param() params: {id: string}): Promise<any> {
           return this.usersService.getById(params.id);
      }
}