import { Injectable } from '@nestjs/common';
import { Task } from './task';

@Injectable()
export class TaskService {
    tasks: Task[] = [
        { id: 1, description: 'Tarefa 1', completed: false },
        { id: 2, description: 'Tarefa 2', completed: false },
        { id: 3, description: 'Tarefa 3', completed: false },
        { id: 4, description: 'Tarefa 4', completed: false },
        { id: 5, description: 'Tarefa 5', completed: false },
        { id: 6, description: 'Tarefa 6', completed: false },
    ];

    getAll() {
        return this.tasks;
    }

    getById(params) {
        const task = this.tasks.find(value => value.id == params.id);
        return task;
    }

    create(task: Task) {
        let lastId = 0;
        if(this.tasks.length > 0) {
            lastId = this.tasks[this.tasks.length - 1 ].id
        }

        task.id = lastId + 1;
        this.tasks.push(task);

        return task;
    }

    update(id: number, task: Task) {
        const taskArray = this.getById(id)
        console.log(taskArray)
        if(taskArray) {
            taskArray.description = task.description;
            taskArray.completed = task.completed;
        }

        return taskArray;
    }

    delete(id: number) {
        const index = this.tasks.findIndex((value) => value.id == id);
        this.tasks.splice(index, 1);
    }
}
