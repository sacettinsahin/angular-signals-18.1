import { Component, input, output, signal } from '@angular/core';
import { Task } from '../../models/task.model';
import { CardComponent } from "../../../shared/card/card.component";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  task = input.required<Task>();
  completeTask = output<string>();

  complete(task:Task):void{
    this.completeTask.emit(task.id);
  }


}
