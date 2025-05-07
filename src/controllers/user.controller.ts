import { Response, Request } from "express";
import { getAllUser, handleCreateUser, handleDeleteUser } from "services/user-service";
const getHomePage = async (req: Request, res: Response) => {
    const users = await getAllUser();
    return res.render("home", {
        users: users
    });
}
const getCreateAUser = (req: Request, res: Response) => {
    return res.render("create-user");
}
const PostCreateUser = async (req: Request, res: Response) => {
    console.log(">>>>> check data:", req.body);
    const { fullName, email, address } = req.body;
    // console.log("check fullName:", fullName);
    // console.log("check email:", email);
    await handleCreateUser(fullName, email, address);
    return res.redirect("/");
}

const PostDeleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    await handleDeleteUser(id);
    return res.redirect("/");
}
export { getHomePage, getCreateAUser, PostCreateUser, PostDeleteUser };