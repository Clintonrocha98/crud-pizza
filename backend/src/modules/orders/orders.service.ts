import { IOrdersRepository } from "./repository/IOrdersRepository";

class OrdersService {
  constructor(private orderRepository: IOrdersRepository) {}

  async createOrder(pizzaId: string) {
    return await this.orderRepository.createOrder(pizzaId);
  }
  async getOrderById(id: string) {
    return await this.orderRepository.getOrderById(id);
  }

  async getAllOrders() {
    return await this.orderRepository.getAllOrders();
  }
}
export { OrdersService };
