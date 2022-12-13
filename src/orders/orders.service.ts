import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderDTO } from './order.dto';
import { Order } from './order.entity';

@Injectable()
export class OrdersService {
    constructor(
        @InjectRepository(Order)
        private readonly orderRepository: Repository<Order>,
    ) {}

    async findAll() {
        return this.orderRepository.find();
    }

    async getById(id: number) {
        return this.orderRepository.findOneBy({ id });
    }

    async delete(id: string) {
        await this.orderRepository.delete(id);
    }

    async create(dto: OrderDTO) {
        const order = this.orderRepository.create(dto);
        return this.orderRepository.save(order);
    }

    async update(data) {
        const { id, dto} = data;
        const order = await this.getById(id);
        order.client = dto.client;
        return this.orderRepository.save(order);
    }
}