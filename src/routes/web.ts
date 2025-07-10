import { getCreateProductPage, getProductDetail, getViewProduct, PostCreateProduct, PostDeleteProduct, PostUpdateProduct } from 'controllers/admin/product.controller';
import express, { Express } from "express";
import { getHomePage, PostCreateUser, PostDeleteUser, getViewUser, PostUpdateUser } from "controllers/user.controller";
import { getDashboardPage, getUserPage, getProductPage, getOrderPage, getCreateAUserPage } from "controllers/admin/dashboard.controller";
import fileUploadMiddleware from "src/middleware/multer";
import { getLoginPageClient, getRegisterPageClient } from 'controllers/client/auth.controller';

const router = express.Router();

const webRoutes = (app: Express) => {

    router.get("/", getHomePage);

    router.get("/product/:id", getProductDetail);

    router.post("/handle-create-user", PostCreateUser);

    app.use("/", router);

    //admin route
    router.get("/admin", getDashboardPage);

    router.get("/admin/create-user", getCreateAUserPage);

    router.post("/admin/handle-create-user", fileUploadMiddleware("Avatar"), PostCreateUser);

    router.get("/admin/users", getUserPage);

    router.get("/admin/handle-view-user/:id", getViewUser);

    router.post("/admin/handle-update-user", fileUploadMiddleware("Avatar"), PostUpdateUser);

    router.post("/admin/handle-delete-user/:id", PostDeleteUser);

    router.get("/admin/product", getProductPage);

    router.get("/admin/create-product", getCreateProductPage);

    router.post("/admin/handle-create-product", fileUploadMiddleware("avatarProduct", "images/product"), PostCreateProduct)

    router.get("/admin/handle-view-product/:id", getViewProduct);

    // router.post("/admin/handle-delete-product/:id", PostDeleteProduct);
    router.post("/admin/handle-delete-product/:id", PostDeleteProduct);

    router.post("/admin/handle-update-product", fileUploadMiddleware("avatarProduct", "images/product"), PostUpdateProduct);

    router.get("/admin/order", getOrderPage);

    router.get("/login", getLoginPageClient);

    router.get("/register", getRegisterPageClient)
}
export default webRoutes;