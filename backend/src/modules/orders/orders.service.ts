import { IOrdersRepository } from "./repository/IOrdersRepository";
import { OrdersDTO } from "./orders.dto";

class OrdersService {
  constructor(private orderRepository: IOrdersRepository) {}

  async createOrder({ name, price, quantity }: OrdersDTO) {
    return await this.orderRepository.createOrder({ name, price, quantity });
  }
  async getOrderById(id: string) {
    return await this.orderRepository.getOrderById(id);
  }

  async getAllOrders() {
    return await this.orderRepository.getAllOrders();
  }
}
export { OrdersService };
