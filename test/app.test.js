const request = require("supertest");
const app = require("../server.cjs");


describe("GET /", () => {
  it("should respond with the index.html file", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.headers["content-type"]).toContain("text/html");
    expect(response.text).toContain("<!DOCTYPE html>");
  });
});
