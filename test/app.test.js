import request from "supertest";
import app from "../server.mjs";

describe("GET /", () => {
  it("should respond with the index.html file", async () => {
    const response = await request(app).get("/");
  });
});
