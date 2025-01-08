import { Component, EventEmitter, input, Output, signal } from '@angular/core';
import { AddTask, Task } from '../models/task.model';
import { User } from '../models/user.model';
import { TaskComponent } from './task/task.component';
import { CommonModule } from '@angular/common';
import { NewTaskComponent } from './new-task/new-task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  taskList = input.required<Task[]>();
  listOwner = input.required<User>();

  @Output() removeTask = new EventEmitter<string>();
  // @Output() addTask = new EventEmitter<AddTask>();

  isAddPopup: boolean = false;

  handleCompletedTask(taskId: string): void {
    this.removeTask.emit(taskId);
  }

  onStartAddTask(): void {
    this.isAddPopup = true;
  }

  closePopup($event: boolean): void {
    this.isAddPopup = $event;
  }

  handleNewTask($event: AddTask): void {
    const newTask = {
      id: new Date().getTime.toString(),
      userId: this.listOwner().id,
      title: $event.title,
      summary: $event.summary,
      dueDate: $event.date
    }
    this.taskList().unshift(newTask);

    this.isAddPopup = false;
  }
}
