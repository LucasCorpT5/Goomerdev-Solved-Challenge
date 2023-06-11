import request from "supertest";
import app from "../server";

describe("Create product", () => {
    it("should be able to create product", async () => {
        const response = await request(app).post("/products/create").send({
            name: "Prato 2", 
            productImg: "https://static.itdg.com.br/images/1200-675/00476ffdd307a762beb387d9f3da0ae1/321428-original.jpg", 
            price: 60, 
            category: "Prato principal", 
            restaurantId: "2a9f3caf-be59-4e8a-ac80-8866b0694f4d"
        });

        console.log(response.status);
    });
});

describe("List all products", () => {
    it("should be able to list all products", async () => {
        const response = await request(app).get("/products/all");

        console.log(response.status);
    });
});

describe("Update product", () => {
    it("should be able to update product", async () => {
        const response = await request(app).put("/products/update").send({
            id: "7153fede-4c86-4364-88a9-926e6b7e7a9c",
            name: "Carbonara A Milanesa", 
            productImg: "https://static.itdg.com.br/images/1200-675/00476ffdd307a762beb387d9f3da0ae1/321428-original.jpg", 
            price: 97, 
            category: "Prato principal", 
            restaurantId: "fa201b79-ad7a-4b18-9dec-553c35772e84"
        });

        console.log(response.status);
    });
});

describe("Delete product", () => {
    it("should be able to delete product", async () => {
        const response = await request(app).delete("/products/delete").send({
            id: "a11efc7e-32aa-4d90-9756-d1539e6179af"
        });

        console.log(response.status);
    })
})