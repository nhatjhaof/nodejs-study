import { Response, Request } from "express";
const getDashboardPage = async (req: Request, res: Response) => {

    return res.render("admin/dashboard.ejs");
}
export { getDashboardPage };