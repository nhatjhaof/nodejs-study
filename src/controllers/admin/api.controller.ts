// controllers/admin/api.controller.ts
import { Request, Response } from "express";
import { getAllUser } from "services/admin/user-service";

const getUsers = async (req: Request, res: Response) => {
    const users = await getAllUser();
    res.status(200).json({ data: users });
};

export { getUsers };
