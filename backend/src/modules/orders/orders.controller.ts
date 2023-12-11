import { Request, Response } from "express";
import { OrdersService } from "./orders.service";

class OrdersController {
  constructor(private orders: OrdersService) {}

  async createOrder(req: Request, res: Response) {
    const { pizzaId } = req.body;

    const order = await this.orders.createOrder(pizzaId);

    return res.status(201).json(order);
  }
  async getOrdersById(req: Request, res: Response) {
    const { id } = req.params;

    const order = await this.orders.getOrderById(id);

    return res.status(200).json(order);
  }

  async getAllOrders(req: Request, res: Response) {
    const order = await this.orders.getAllOrders();

    return res.status(200).json(order);
  }
}
export { OrdersController };
