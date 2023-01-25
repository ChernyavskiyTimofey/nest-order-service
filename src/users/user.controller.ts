import { Controller } from "@nestjs/common";
import { UserDTO } from "./users.dto";
import { MessagePattern } from "@nestjs/microservices";
import { UserService } from "./user.service";

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern({ role: 'user', cmd: 'create'})
  async createOrder(dto: UserDTO) {
    return this.userService.create(dto);
  }

  @MessagePattern({ role: 'user', cmd: 'get-by-id'})
  async getById(id: string) {
    return this.userService.getById(id);
  }

  @MessagePattern({ role: 'user', cmd: 'update'})
  async update(data) {
    return this.userService.update(data);
  }

  @MessagePattern({ role: 'user', cmd: 'remove'})
  async delete(id: string) {
    await this.userService.deleteUser(id);
    return true;
  }
}