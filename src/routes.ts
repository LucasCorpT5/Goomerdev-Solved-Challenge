import express from "express";
import { restaurantController } from "./controllers/restaurantController";
import { productController } from "./controllers/productController";

const router = express.Router();

router.post("/restaurant/create", restaurantController.createRestaurant);
router.delete("/restaurant/delete", restaurantController.deleteRestaurant);
router.get("/restaurant/all", restaurantController.listAllRestaurants);
router.get("/restaurant/select", restaurantController.listRestaurantDetails);
router.put("/restaurant/update", restaurantController.updateRestaurant);

router.get("/products/all", productController.listAllProducts)
router.post("/products/create", productController.create)
router.delete("/products/delete", productController.deleteProduct)
router.put("/products/update", productController.updateProducts)

export {
    router,
}