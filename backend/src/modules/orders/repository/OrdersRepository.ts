import { Order, PrismaClient } from "@prisma/client";
import { IOrdersRepository } from "./IOrdersRepository";
import { OrdersDTO } from "../orders.dto";

class OrdersRepository implements IOrdersRepository {
  constructor(private prisma: PrismaClient) {}

  async createOrder({ name, price, quantity }: OrdersDTO): Promise<Order> {
    return await this.prisma.order.create({ data: { name, price, quantity } });
  }

  async getOrderById(id: string): Promise<OrdersDTO> {
    return await this.prisma.order.findUnique({ where: { id } });
  }

  async getAllOrders(): Promise<OrdersDTO[]> {
    return await this.prisma.order.findMany();
  }
}

export { OrdersRepository };
