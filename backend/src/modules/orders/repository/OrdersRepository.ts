import { Order, PrismaClient } from "@prisma/client";
import { IOrdersRepository } from "./IOrdersRepository";

class OrdersRepository implements IOrdersRepository {
  constructor(private prisma: PrismaClient) {}

  async createOrder(pizzaId: string): Promise<Order> {
    return await this.prisma.order.create({ data: { pizzaId } });
  }

  async getOrderById(id: string): Promise<Order> {
    return await this.prisma.order.findUnique({ where: { id } });
  }

  async getAllOrders(): Promise<Order[]> {
    return await this.prisma.order.findMany();
  }
}

export { OrdersRepository };
