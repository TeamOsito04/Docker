const request = require("supertest");
const app = require("../server.mjs");

describe("GET /", () => {
  it("should respond with the index.html file", async () => {
    const response = await request(app).get("/"); // Hace la solicitud GET a "/"
    expect(response.status).toBe(200); // Asegura que la respuesta tenga un estado 200
    expect(response.headers["content-type"]).toContain("text/html"); // Verifica que el tipo de contenido sea HTML
    expect(response.text).toContain("<!DOCTYPE html>"); // Opcional: valida que el contenido tenga algo esperado de index.html
  });
});
