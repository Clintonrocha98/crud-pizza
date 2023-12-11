import { Router } from "express";
import { OrdersFactory } from "../modules/orders/orders.factory";
import pizza from "../modules/pizzas/pizzas.json";

const routes = Router();

routes.get("/api/pizzas", (req, res) => res.status(200).json(pizza));

routes.post("/api/newOrder", (req, res) =>
  OrdersFactory().createOrder(req, res)
);

routes.get("/api/orders", (req, res) => OrdersFactory().getAllOrders(req, res));

routes.get("/api/order/:id", (req, res) =>
  OrdersFactory().getOrdersById(req, res)
);

export { routes };
