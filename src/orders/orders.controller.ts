import { Controller } from '@nestjs/common'
import { OrderDTO } from './order.dto'
import { MessagePattern } from '@nestjs/microservices';
import { OrdersService } from './orders.service'

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @MessagePattern({ role: 'order', cmd: 'create'})
  async createOrder(dto: OrderDTO) {
    return this.ordersService.create(dto);
  }

  @MessagePattern({ role: 'order', cmd: 'get-by-id'})
  async getById(id: string) {
    return this.ordersService.getById(Number(id));
  }

  @MessagePattern({ role: 'order', cmd: 'update'})
  async update(data) {
    return this.ordersService.update(data);
  }

  @MessagePattern({ role: 'order', cmd: 'remove'})
  async delete(id: string) {
    await this.ordersService.delete(id);
    return true;
  }
}