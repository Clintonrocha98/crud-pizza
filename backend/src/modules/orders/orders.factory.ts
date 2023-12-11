import { prisma } from "../../lib/prisma/prisma";
import { OrdersController } from "./orders.controller";
import { OrdersService } from "./orders.service";
import { OrdersRepository } from "./repository/OrdersRepository";

export const OrdersFactory = () => {
  const ordersRepository = new OrdersRepository(prisma);
  const ordersService = new OrdersService(ordersRepository);
  const ordersController = new OrdersController(ordersService);

  return ordersController;
};
