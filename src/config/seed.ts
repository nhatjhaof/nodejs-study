import { hashPassword } from "services/user-service";
import { prisma } from "./client"
import { ACCOUNT_TYPE } from "./constant";

const initDatabase = async () => {
    const countUser = await prisma.user.count();
    const countRole = await prisma.role.count();
    if (countRole === 0) {
        await prisma.role.createMany({
            data: [
                {
                    name: "ADMIN",
                    description: "ADMIN thi full quyen"
                },
                {
                    name: "USER",
                    description: "USER thi co quyen user"
                },
            ]
        })
    } if (countUser === 0) {
        const defaultPassword = await hashPassword("123456");
        const adminRole = await prisma.role.findFirst({
            where: { name: "ADMIN" }
        })
        if (adminRole) {
            await prisma.user.createMany({
                data: [
                    {
                        username: "hao@gmail.com",
                        password: defaultPassword,
                        fullName: "haoIT",
                        accountType: ACCOUNT_TYPE.SYSTEM,
                        roleId: adminRole.id
                    },
                    {
                        username: "tai@gmail.com",
                        password: defaultPassword,
                        fullName: "haoITER",
                        accountType: ACCOUNT_TYPE.SYSTEM,
                        roleId: adminRole.id
                    },
                ]
            })
        }
    } if (countRole == 0 && countUser == 0) {
        console.log("Already init data");
    }

}
export default initDatabase;