import { Response, Request } from "express";
import { handleCreateUser } from "../services/user-service";
const getHomePage = (req: Request, res: Response) => {
    return res.render("home");
}
const getCreateAUser = (req: Request, res: Response) => {
    return res.render("create-user");
}
const PostCreateUser = (req: Request, res: Response) => {
    console.log(">>>>> check data:", req.body);
    const { fullName, email, address } = req.body;
    // console.log("check fullName:", fullName);
    // console.log("check email:", email);
    handleCreateUser(fullName, email, address);
    return res.redirect("/");
}
export { getHomePage, getCreateAUser, PostCreateUser };