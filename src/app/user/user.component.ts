import { CommonModule } from '@angular/common';
import { Component, computed, EventEmitter, Input, input, output } from '@angular/core';
import { User } from '../models/user.model';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  user = input.required<User>();
  onSelectUser = output<string>();

  selectedUserId = input.required<string>();

  imagePath = computed(() => {
    return 'assets/users/' + this.user().avatar;
  });

  handleClick(){
    this.onSelectUser.emit(this.user().id);
  }
}
