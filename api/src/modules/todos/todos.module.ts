import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LoggerModule } from 'src/logger/logger.module';
import { LoggerService } from 'src/logger/logger.service';
import { TodosController } from './todos.controller';
import { TodoService } from './todos.service';
import { TodoSchema } from './schemas/todo.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Item', schema: TodoSchema }]),
    LoggerModule,
  ],
  controllers: [TodosController],
  providers: [TodoService, LoggerService],
})
export class TodosModule {}
