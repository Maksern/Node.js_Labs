import express from "express";
import {UserRouter} from './Routes/Task_routes';

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use("/users", UserRouter);

app.listen(PORT, () => {
      console.log(`Server success run on port ${PORT}`);
})

