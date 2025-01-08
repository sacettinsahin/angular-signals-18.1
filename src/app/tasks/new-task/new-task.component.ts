import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddTask } from '../../models/task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Output() close = new EventEmitter<boolean>();
  @Output() add = new EventEmitter<AddTask>();

  enteredTitle = signal<string>('');
  enteredSummary = signal<string>('');
  enteredDate = signal<string>('');

  closePopup(): void {
    this.close.emit(false);
  }

  onSubmit() {
    this.add.emit({
      title: this.enteredTitle(),
      summary: this.enteredSummary(),
      date: this.enteredDate(),
    });
  }
}
