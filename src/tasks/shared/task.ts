import * as mongoose from 'mongoose';

export const TaskSchema = new mongoose.Schema({
    description: String,
    completed: Boolean
})

export interface Task {
    id: number;
    description: string;
    completed: boolean;
}
