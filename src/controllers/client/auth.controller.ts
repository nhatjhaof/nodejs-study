import { Request, Response } from "express"

const getRegisterPageClient = (req: Request, res: Response) => {
    return res.render("client/auth/register.ejs");
}

const getLoginPageClient = (req: Request, res: Response) => {
    return res.render("client/auth/login.ejs");
}

export { getRegisterPageClient, getLoginPageClient }