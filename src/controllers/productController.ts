import { Request, Response } from "express";
import { productService } from "../services/productService";

export const productController = {
    create: async(req: Request, res: Response) => {
        const { name, productImg, price, category, restaurantId } = req.body;

        const createProduct = await productService.create(name, productImg, price, category, restaurantId);

        return res.status(201).json(createProduct);
    },

    listAllProducts: async(req: Request, res: Response) => {
        const allProducts = await productService.listAllProducts();

        return res.json(allProducts);
    },

    updateProducts: async(req: Request, res: Response) => {
        const id = req.body.id;
        const { name, productImg, price, category, restaurantId } = req.body;

        const updateProduct = await productService.updateProduct(id, name, productImg, price, category, restaurantId);

        return res.json(updateProduct);
    },

    deleteProduct: async(req: Request, res: Response) => {
        const id = req.body.id;

        const removeProduct = await productService.deleteProduct(id);

        return res.json(removeProduct);
    }
}