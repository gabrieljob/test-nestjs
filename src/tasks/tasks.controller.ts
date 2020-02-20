import { Controller, Get, Param, Body, Post, Put, Delete } from '@nestjs/common';
import { TaskService } from './shared/task.service';
import { Task } from './shared/task';

@Controller('tasks')
export class TasksController {
    constructor(private taskService: TaskService) {}

    @Get()
    async getAll(): Promise<Task[]> {
        return this.taskService.getAll();
    }

    @Get(':id')
    async getById(@Param() params): Promise<Task> {
        return this.taskService.getById(params);
    }

    @Post()
    async create(@Body() task: Task): Promise<Task> {
        return this.taskService.create(task);
    }

    @Put(':id')
    async update(@Param() params, @Body() task: Task): Promise<Task> {
        return this.taskService.update(params, task);
    }

    @Delete(':id')
    async delete(@Param() params) {
        return this.taskService.delete(params);
    }
}
