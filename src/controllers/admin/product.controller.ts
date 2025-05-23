import { error } from 'console';
import { ProductSchema, TProductSchema } from './../../validation/product.schema';
import e, { Response, Request } from "express";
import { getAllRole, getAllUser } from "services/admin/user-service";
import { getAllProduct, getProductById, handleCreateProduct, handleDeleteProduct, handleUpdateProduct } from 'services/admin/product-service';
const getProductDetail = async (req: Request, res: Response) => {

    return res.render("client/product/product-detail.ejs");
}

const getCreateProductPage = async (req: Request, res: Response) => {
    const errors = [];
    const oldData = {
        name: "",
        price: "",
        detailDesc: "",
        shortDesc: "",
        quantity: "",
        factory: "",
        target: ""
    }
    return res.render("admin/products/create-product.ejs", {
        errors, oldData
    });
}

const getViewProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    const product = await getProductById(id);
    const factoryOptions = [
        { name: "Apple (MacBook)", value: "APPLE" },
        { name: "Asus", value: "ASUS" },
        { name: "Lenovo", value: "LENOVO" },
        { name: "Dell", value: "DELL" },
        { name: "LG", value: "LG" },
        { name: "Acer", value: "ACER" },
    ];

    const targetOptions = [
        { name: "Gaming", value: "GAMING" },
        { name: "Sinh viên - Văn phòng", value: "SINHVIEN-VANPHONG" },
        { name: "Thiết kế đồ họa", value: "THIET-KE-DO-HOA" },
        { name: "Mỏng nhẹ", value: "MONG-NHE" },
        { name: "Doanh nhân", value: "DOANH-NHAN" },
    ];
    return res.render("admin/products/view-product.ejs", {
        product,
        factoryOptions,
        targetOptions
    })
}
const PostCreateProduct = async (req: Request, res: Response) => {
    const { name, price, detailDesc, shortDesc, quantity, factory, target } = req.body as TProductSchema;
    const validate = ProductSchema.safeParse(req.body);
    const file = req.file;
    const avatarProduct = req?.file?.filename ?? null;
    if (!validate.success) {
        //error 
        const errorZod = validate.error.issues;
        const errors = errorZod?.map(item => `${item.message} (${item.path})`)
        const oldData = {
            name, price, detailDesc, shortDesc, quantity, factory, target
        }
        return res.render("admin/products/create-product.ejs", {
            errors, oldData
        });
    }
    await handleCreateProduct(name, price, detailDesc, shortDesc, quantity, factory, target, avatarProduct);
    return res.redirect("/admin/product");
}

const PostDeleteProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    await handleDeleteProduct(id);
    return res.redirect("/admin/product");
}

const PostUpdateProduct = async (req: Request, res: Response) => {
    const { id, name, price, detailDesc, shortDesc, quantity, factory, target } = req.body as TProductSchema;
    const file = req.file;
    const avatarProduct = req?.file?.filename ?? null;
    const updateProduct = await handleUpdateProduct(id, name, price, detailDesc, shortDesc, quantity, factory, target, avatarProduct);
    return res.redirect("/admin/product")
}
export { getProductDetail, getCreateProductPage, PostCreateProduct, getViewProduct, PostDeleteProduct, PostUpdateProduct }