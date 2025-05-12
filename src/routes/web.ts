import express, { Express } from "express";
import { getCreateAUser, getHomePage, PostCreateUser, PostDeleteUser, getViewUser, PostUpdateUser } from "controllers/user.controller";
import { getDashboardPage } from "controllers/admin/dashboard.controller";
const router = express.Router();

const webRoutes = (app: Express) => {

    router.get("/", getHomePage);

    router.get("/create-user", getCreateAUser);

    router.post("/handle-create-user", PostCreateUser);

    router.post("/handle-delete-user/:id", PostDeleteUser);

    router.get("/handle-view-user/:id", getViewUser);

    router.post("/handle-update-user", PostUpdateUser);

    app.use("/", router);

    //admin route
    router.get("/admin", getDashboardPage);
}
export default webRoutes;