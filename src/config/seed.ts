import { prisma } from "./client"

const initDatabase = async () => {
    const countUser = await prisma.user.count();
    if (countUser === 0) {
        await prisma.user.createMany({
            data: [
                {
                    username: "hao@gmail.com",
                    password: "123456",
                    accountType: "SYSTEM"
                },
                {
                    username: "tai@gmail.com",
                    password: "123456",
                    accountType: "SYSTEM"
                },
            ]
        })
    } else {
        console.log("Users have already");
    }

}
export default initDatabase;