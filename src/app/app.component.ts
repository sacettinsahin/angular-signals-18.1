import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { CommonModule } from '@angular/common';
import { dummyTasks } from './dummy-tasks';
import { TasksComponent } from './tasks/tasks.component';
import { User } from './models/user.model';
import { AddTask, Task } from './models/task.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    UserComponent,
    CommonModule,
    TasksComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = signal<User[]>(DUMMY_USERS);
  selectedUserId = signal<string>(DUMMY_USERS[0].id);
  selectedUser = signal<User>(DUMMY_USERS[0]);

  tasks = signal<Task[]>(dummyTasks);
  selectedUsersTask = computed(() => {
    return this.tasks().filter((item) => item.userId == this.selectedUserId());
  });

  onUserSelected(id: string): void {
    this.selectedUserId.set(id);

    const selected = this.users().find(
      (item) => item.id == this.selectedUserId()
    );

    if (selected) this.selectedUser.set(selected);
  }

  handleRemoveTask(taskId: string): void {
    const openTasks = this.tasks().filter((element) => element.id !== taskId);
    this.tasks.set(openTasks);
  }
}
