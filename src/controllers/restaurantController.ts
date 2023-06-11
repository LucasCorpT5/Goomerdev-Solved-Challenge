import { Request, Response } from "express";
import { restaurantService } from "../services/restaurantService";

export const restaurantController = {
    createRestaurant: async(req: Request, res: Response) => {
        const { name, restaurantImg, address, operation } = req.body;

        const restaurant = await restaurantService.create(name, restaurantImg, address, operation);

        return res.status(201).json(restaurant);
    },

    listAllRestaurants: async(req: Request, res: Response) => {
        const allRestaurants = await restaurantService.allRestaurants();

        return res.json(allRestaurants);
    },

    listRestaurantDetails: async(req: Request, res: Response) => {
        const id = req.params.id;

        const details = await restaurantService.listRestaurantDetails(id);

        return res.json(details);
    },

    updateRestaurant: async(req: Request, res: Response) => {
        const { name, restaurantImg, address, operation } = req.body;
        const id = req.body.id;

        const updateRes = await restaurantService.updateRestaurant(id, name, restaurantImg, address, operation);

        return res.json(updateRes);
    },

    deleteRestaurant: async(req: Request, res: Response) => {
        const id = req.body.id;

        const deleteRes = await restaurantService.deleteRestaurant(id);

        return res.json(deleteRes);
    }
}