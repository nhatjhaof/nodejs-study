import e, { Response, Request } from "express";
import { getAllRole, getAllUser } from "services/user-service";
const getProductDetail = async (req: Request, res: Response) => {

    return res.render("client/product/product-detail.ejs");
}

const getCreateProductPage = async (req: Request, res: Response) => {

    return res.render("admin/products/create-product.ejs");
}

const PostCreateProduct = async (req: Request, res: Response) => {
    const { nameProduct, price, detailDesc, shortDesc, quantity, factory, target } = req.body;
    const file = req.file;
    const avatarProduct = file?.filename ?? "";
    await handleCreateProduct(nameProduct, price, detailDesc, shortDesc, quantity, factory, target, avatarProduct);
    return res.redirect("/admin/product");
}
export { getProductDetail, getCreateProductPage, PostCreateProduct }