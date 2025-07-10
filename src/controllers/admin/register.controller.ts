import { Request, Response } from "express"

const getRegisterPage = (req: Request, res: Response) => {
    return res.render("admin/register/register-show.ejs");
}

const getLoginPage = (req: Request, res: Response) => {
    return res.render("admin/register/login-show.ejs");
}

export { getRegisterPage, getLoginPage }