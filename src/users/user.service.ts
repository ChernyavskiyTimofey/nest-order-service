import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserDTO } from "./users.dto";
import { User } from "./user.entity";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>
    ) {}

    async getAll() {
        return this.userRepository.find()
    }
    
    async create(userDTO: UserDTO) {
        const user = this.userRepository.create(userDTO);
        return this.userRepository.save(user);
    }

    async getById(id: string) {
        return this.userRepository.findOne({
            where: {
                id: Number(id)
            }
        });
    }

    async update(updateData) {
        const { id, dto: userDTO } = updateData;
        const user = await this.getById(id);
        user.name = userDTO.name || user.name;
        user.email = userDTO.email || user.email;
        user.orders.push(...userDTO.orders);
        return this.userRepository.save(user);
    }

    async deleteUser(id: string) {
        return this.userRepository.delete({ id: Number(id)})
    }
}