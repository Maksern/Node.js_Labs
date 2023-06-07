// @ts-nocheck
import express from 'express';
import UserRouter from './Routers/UserRouter.js';

const app = express( );
const PORT = 5000;

app.use(express.json());
app.use("/users", UserRouter);

app.listen(PORT, () => {
    console.log("Server run success on PORT", PORT);
});
