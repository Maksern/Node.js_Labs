import database from "../database.js"

const createUser = async(req, res) => {
      const {name, username} = req.body;
      const newUser = await database.query(`INSERT INTO  users (name, username) values ($1, $2) RETURNING *`, [name, username]);
      res.send(newUser.rows);
}

const getUsers = async(req, res) => {
      const users = await database.query(`SELECT * FROM users`);
      res.send(users.rows);
}

const getUser = async(req, res) => {
      const user = await database.query(`SELECT * FROM users WHERE id = $1`, [req.params.id]);
      res.send(user.rows);
}


const updateUser = async(req, res) => { 
      const {id, name, username} = req.body;
      const updateUser = await database.query(`UPDATE users set name = $1, username = $2 WHERE id = $3 RETURNING *`, [name, username, id]);
      res.send(updateUser.rows);
}

const deleteUser = async(req, res) => { 
      const user = await database.query(`DELETE FROM users WHERE id = $1`, [req.params.id]);
      res.send(user.rows);
}

export const controller = {createUser, getUsers, getUser, updateUser, deleteUser}