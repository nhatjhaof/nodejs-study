import express, { Express } from "express";
import { getUsers } from 'controllers/admin/api.controller';

const router = express.Router();

const apiRoutes = (app: Express) => {

    router.get("/users", getUsers);

    app.use("/api", router);
}
export default apiRoutes;