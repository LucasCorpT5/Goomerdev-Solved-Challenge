import prisma from "../prisma";

export const restaurantService = {
    create: async(name: string, restaurantImg: string, address: string, operation: Date) => {
        const restaurant = await prisma.restaurant.create({
            data: {
                name,
                restaurantImg,
                address,
                operation
            }
        });

        return restaurant;
    },

    allRestaurants: async() => {
        const restaurants = await prisma.restaurant.findMany();

        return restaurants;
    },

    listRestaurantDetails: async(id: string) => {
        const details = await prisma.restaurant.findMany({
            where: {
                id
            }
        });

        return details;
    },

    deleteRestaurant: async(id: string) => {
        const deleteRestaurant = await prisma.restaurant.deleteMany({
            where: {
                id
            }
        });

        return deleteRestaurant;
    },

    updateRestaurant: async(id: string, name: string, restaurantImg: string, address: string, operation: Date) => {
        const update = await prisma.restaurant.update({
            where: { id: id },
            data: {
                name,
                restaurantImg,
                address,
                operation,
            }
        });

        return update;
    }
}