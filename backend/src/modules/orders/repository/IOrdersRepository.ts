import { Order } from "@prisma/client";

interface IOrdersRepository {
  createOrder(pizzaId: string): Promise<Order>;
  getOrderById(id: string): Promise<Order>;
  getAllOrders(): Promise<Order[]>;
}

export { IOrdersRepository };
