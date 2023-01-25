import { Order } from "src/orders/order.entity"
export class UserDTO {
    readonly name: string
    readonly email: string
    readonly orders: Order[]
}