import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from './task';

@Injectable()
export class TaskService {

    constructor(@InjectModel('Task') private readonly taskModel: Model<Task>) {}

    getAll() {
        return this.taskModel.find().exec();
    }

    getById(params) {
        const task = this.taskModel.findById(params.id);
        return task;
    }

    create(task) {
        const newTask = new this.taskModel(task);
        return newTask.save();
    }

    update(params, task) {
        return this.taskModel.findByIdAndUpdate(params.id, task, {new: true});
    }

    delete(params) {
        return this.taskModel.findByIdAndRemove(params.id);
    }
}
