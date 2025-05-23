import { Response, Request } from "express";
import { getAllProduct } from "services/admin/product-service";
import { getAllRole, getAllUser } from "services/admin/user-service";
const getDashboardPage = async (req: Request, res: Response) => {

    return res.render("admin/dashboard/show.ejs");
}
const getUserPage = async (req: Request, res: Response) => {
    const users = await getAllUser();
    return res.render("admin/users/show.ejs", {
        users: users
    });
}
const getProductPage = async (req: Request, res: Response) => {
    const products = await getAllProduct();
    return res.render("admin/products/show.ejs", {
        products
    });
}
const getOrderPage = async (req: Request, res: Response) => {

    return res.render("admin/orders/show.ejs");
}
const getCreateAUserPage = async (req: Request, res: Response) => {
    const roles = await getAllRole();
    return res.render("admin/users/create-user.ejs", {
        roles
    });
}
export { getDashboardPage, getUserPage, getProductPage, getOrderPage, getCreateAUserPage };