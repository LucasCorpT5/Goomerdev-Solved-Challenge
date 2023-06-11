import request from "supertest";
import app from "../server";

describe("Create restaurant", () => {
    it("should be able to create a new restaurant", async () => {
        const response = await request(app).post("/restaurant/create").send({
            name: "Restaurante 8771717",
            restaurantImg: "https://img.freepik.com/fotos-gratis/interior-do-restaurante_1127-3394.jpg",
            address: "RJ, avenida horacio, rua 818, almandegueiras 88",
            operation: "2023-06-06T14:07:48.000Z"
        });

        console.log(response.status)
    });
});

describe("List restaurants", () => {
    it("should be able to list all restaurants", async () => {
        const response = await request(app).get("/restaurant/all");

        console.log(response.status);
    });
});

describe("list restaurant details", () => {
    it("should be able to list restaurant details", async () => {
        const response = await request(app).get("/restaurant/select").send({
            id: "2a9f3caf-be59-4e8a-ac80-8866b0694f4d"
        });

        console.log(response.status);
    });
});

describe("update restaurants", () => {
    it("should be able to update restaurant data", async () => {
        const response = await request(app).put("/restaurant/update").send({
            id: "5bebc41f-46bd-47e0-b327-cce17dfac5e5",
            name: "Restaurante 66",
            restaurantImg: "https://img.freepik.com/fotos-gratis/interior-do-restaurante_1127-3394.jpg",
            address: "RJ, avenida horacio, rua 818, almandegueiras 88",
            operation: "2023-06-06T14:07:48.000Z"
        });

        console.log(response.status);
    });
});

describe("delete restaurants", () => {
    it("should be able to delete restaurants", async () => {
        const response = await request(app).delete("/restaurant/delete").send({
            id: "d7c62ffd-15d7-490d-aa14-49c6b86ae36c",
        });

        console.log(response.status);
    });
});