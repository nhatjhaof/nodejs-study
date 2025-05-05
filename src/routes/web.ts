import express, { Express } from "express";
import { getCreateAUser, getHomePage, PostCreateUser } from "../controllers/user.controller";
const router = express.Router();

const webRoutes = (app: Express) => {

    router.get("/", getHomePage);

    router.get("/create-user", getCreateAUser);

    router.post("/handle-create-user", PostCreateUser);
    app.use("/", router);
}
export default webRoutes;