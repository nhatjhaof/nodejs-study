import { Response, Request } from "express";
const getHomePage = (req: Request, res: Response) => {
    return res.render("home");
}
const createAUser = (req: Request, res: Response) => {
    return res.render("create-user");
}
const handleCreateUser = (req: Request, res: Response) => {
    return res.redirect("/");
}
export { getHomePage, createAUser, handleCreateUser };