import { prisma } from './../config/client';
const handleCreateProduct = async (
    name: string,
    price: string,
    detailDesc: string,
    shortDesc: string,
    quantity: string,
    factory: string,
    target: string,
    avatarProduct: string) => {

    const newProduct = await prisma.product.create({
        data: {
            name: name,

        }

    })

} 