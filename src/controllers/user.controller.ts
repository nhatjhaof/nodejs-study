import { Response, Request } from "express";
import { getAllRole, getAllUser, getUserById, handleCreateUser, handleDeleteUser, handleUpdateUser } from "services/user-service";
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
    const { fullName, username, phone, role, address } = req.body;
    const file = req.file;
    const avatar = file?.filename ?? "";
    await handleCreateUser(fullName, username, address, phone, avatar, role);
    return res.redirect("/admin/users");
}

const PostDeleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    await handleDeleteUser(id);
    return res.redirect("/");
}

const getViewUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const roles = await getAllRole();
    const users = await getUserById(id);
    return res.render("admin/users/view-user", {
        id: id,
        user: users,
        roles
    });
}

const PostUpdateUser = async (req: Request, res: Response) => {
    const { id, fullName, phone, role, address } = req.body;
    const file = req.file
    const avatar = file?.filename ?? "";
    await handleUpdateUser(id, fullName, phone, role, address, avatar);
    return res.redirect("/admin/users");
}
export { getHomePage, getCreateAUser, PostCreateUser, PostDeleteUser, getViewUser, PostUpdateUser };