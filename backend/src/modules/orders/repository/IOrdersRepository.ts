import { OrdersDTO } from "../orders.dto";

interface IOrdersRepository {
  createOrder(order: OrdersDTO): Promise<OrdersDTO>;
  getOrderById(id: string): Promise<OrdersDTO>;
  getAllOrders(): Promise<OrdersDTO[]>;
}

export { IOrdersRepository };
