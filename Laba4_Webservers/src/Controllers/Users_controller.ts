import { Request, Response } from "express";


const users = [
      {id: 1, name: "Maksym", username: "Crow"},
      {id: 2, name: "Nikita", username: "Vedun"},
      {id: 3, name: "Vlad", username: "Chronos"},
]

const getUsers = (req: Request, res: Response) => {
      if(req.params.id){
            res.send(users.find(user => user.id == +req.params.id))
      }
      res.send(users);
}

const createUser = (req: Request, res: Response) => {
      const user = req.body;
      users.push(user);
      res.send(user);
}

const updateUser = (req: Request, res: Response) => { 
      if(req.params.id){
            let index = users.findIndex( user => user.id == +req.params.id)
            users[index] = req.body;
            users[index].id = +req.params.id;
            res.send(users[index]);
      }
}

const deleteUser =  (req: Request, res: Response) => { 
      if(req.params.id){
            let index = users.findIndex( user => user.id == +req.params.id)
            users.splice(index, 1);
            res.send(users);
      }
}

export const controller = {getUsers, createUser, updateUser, deleteUser}