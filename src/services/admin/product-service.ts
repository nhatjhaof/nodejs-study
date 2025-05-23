import { prisma } from "config/client";

const handleCreateProduct = async (
    nameProduct: string,
    price: number,
    detailDesc: string,
    shortDesc: string,
    quantity: string,
    factory: string,
    target: string,
    avatarProduct: string) => {

    const newProduct = await prisma.product.create({
        data: {
            name: nameProduct,
            price: +price,
            detailDesc: detailDesc,
            shortDesc: shortDesc,
            quantity: +quantity,
            factory: factory,
            target: target,
            ...(avatarProduct && { image: avatarProduct })
        }

    })
}

const getAllProduct = async () => {
    const product = await prisma.product.findMany();
    return product;
}

const getProductById = async (id: string) => {
    const product = await prisma.product.findUnique({
        where: {
            id: +id
        }
    })
    return product;
}

const handleDeleteProduct = async (id: string) => {
    const product = await prisma.product.delete({
        where: {
            id: +id
        }
    })
    return product;
}

const handleUpdateProduct = async (id: string,
    name: string,
    price: number,
    detailDesc: string,
    shortDesc: string,
    quantity: string,
    factory: string,
    target: string,
    avatarProduct: string) => {
    const updateProduct = await prisma.product.update({
        where: { id: +id },
        data: {
            name: name,
            price: +price,
            detailDesc: detailDesc,
            shortDesc: shortDesc,
            quantity: +quantity,
            factory: factory,
            target: target,
            ...(avatarProduct && { image: avatarProduct })
        }
    })
}
export { handleCreateProduct, getAllProduct, getProductById, handleDeleteProduct, handleUpdateProduct }