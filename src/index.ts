import http from "node:http";
import { applyDiscount } from "./price.js";

const port = Number(process.env.PORT) || 4100;

const server = http.createServer((req, res) => {
  const finalPrice = applyDiscount(1000, 15);
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(
    JSON.stringify({
      status: "ok",
      app: "devops-playground",
      version: "2.0.5",
      discountedPrice: finalPrice,
    }),
  );
});

server.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});
