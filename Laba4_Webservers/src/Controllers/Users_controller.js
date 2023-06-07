// @ts-nocheck
const users = [
      {id: 1, name: "Maksym", username: "Crow"},
      {id: 2, name: "Nikita", username: "Vedun"},
      {id: 3, name: "Vlad", username: "Chronos"},
]

const getUsers = (req, res) => {
      if(req.parametrs.id){
            res.send(users.find(user => user.id == req.query.id));
      }
      res.send(users);
}

const createUser = (req, res) => {
      const user = req.body;
      users.push(user);
      res.send(user);
}

const updateUser = (req, res) => { 
      if(req.parametrs.id){
            let index = users.findIndex( user => user.id == req.query.id)
            users[index] = req.body;
            users[index].id = req.query.id;
            res.send(users[index]);
      }
}

const deleteUser =  (req, res) => { 
      if(req.parametrs.id){
            let index = users.findIndex( user => user.id == req.query.id)
            users.splice(index, 1);
            res.send(users);
      }
}

export const controller = {getUsers, createUser, updateUser, deleteUser}