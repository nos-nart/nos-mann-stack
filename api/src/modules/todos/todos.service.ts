import { Injectable } from '@nestjs/common';
import { Todo } from './schemas/todo.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { TodoDto } from './dto/todo.dto';

@Injectable()
export class TodoService {
  constructor(@InjectModel('Todo') private readonly todoModel: Model<Todo>) {}

  async findAll(): Promise<Todo[]> {
    return this.todoModel.find().exec();
  }

  async createTodo(todo: TodoDto) {
    const newTodo = new this.todoModel(todo);
    return newTodo.save();
  }

  async deleteTodo(id: string): Promise<Todo> {
    const deletedTodo = await this.todoModel.findByIdAndRemove(id);
    return deletedTodo;
  }

  async updateTodo(id: string, newTodo: TodoDto): Promise<Todo> {
    const updatedTodo = await this.todoModel.findByIdAndUpdate(id, newTodo, {
      new: true,
    });
    return updatedTodo;
  }
}
