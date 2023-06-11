import prisma from "../prisma";

export const productService = {
    create: async(name: string, productImg: string, price: number, category: string, restaurantId: string) => {
        const product = await prisma.product.create({
            data: {
                name,
                productImg,
                price,
                category,
                restaurant: {
                    connect: { id: restaurantId }
                }
            }
        });

        return product;
    },

    listAllProducts: async() => {
        const allproducts = prisma.product.findMany({});

        return allproducts;
    },

    updateProduct: async(id: string, name: string, productImg: string, price: number, category: string, restaurantId: string) => {
        const update = await prisma.product.update({
            where: { id: id },
            data: {
                name,
                productImg,
                price,
                category,
                restaurantId
            }
        });

        return update;
    },

    deleteProduct: async(id: string) => {
        const deletePrd = await prisma.product.deleteMany({
            where: {
                id
            }
        });

        return deletePrd;
    }
}