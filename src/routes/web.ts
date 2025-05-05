import express, { Express } from "express";
import { createAUser, getHomePage, handleCreateUser } from "../controllers/user.controller";
const router = express.Router();

const webRoutes = (app: Express) => {

    router.get("/", getHomePage);

    router.get("/create-user", createAUser);

    router.post("/handle-create-user", handleCreateUser);
    app.use("/", router);
}
export default webRoutes;