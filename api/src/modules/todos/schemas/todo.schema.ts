import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Todo extends Document {
  @Prop({ type: String, required: true })
  title: string;

  @Prop({ type: Boolean, required: true })
  status: boolean;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
