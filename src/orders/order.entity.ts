import { User } from "src/users/user.entity";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToOne} from "typeorm";

@Entity()
export class Order extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    client: string;

    @ManyToOne(() => User, (user) => user.orders)
    user: User
}