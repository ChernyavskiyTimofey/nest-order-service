import { Order } from 'src/orders/order.entity';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany, BaseEntity } from 'typeorm';

@Entity({ name: 'User'})
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'text'})
    name: string

    @Column({ type: 'text'})
    email: string

    @OneToMany(() => Order, (order) => order.user)
    orders: Order[]
}