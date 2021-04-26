import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { LoggerService } from 'src/logger/logger.service';
import { TodoService } from './todos.service';
import { Todo } from './interfaces/todo.interface';
import { TodoDto } from './dto/todo.dto';

@Controller('todos')
export class TodosController {
  constructor(
    private readonly todoService: TodoService,
    private logger: LoggerService,
  ) {}

  @Get()
  async findAll(): Promise<Todo[]> {
    return this.todoService.findAll();
  }

  @Post()
  async create(@Body() todoDto: TodoDto): Promise<Todo> {
    return this.todoService.createTodo(todoDto);
  }

  @Delete(':id')
  async delete(@Param() param): Promise<Todo> {
    return this.todoService.deleteTodo(param.id);
  }

  @Put(':id')
  async update(@Param() param, @Body() todoDto: TodoDto): Promise<Todo> {
    return this.todoService.updateTodo(param.id, todoDto);
  }
}
