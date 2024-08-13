import { Component } from '@angular/core';
import { User_Repository } from './repository.model';
import { User } from './user.model';
import { FormsModule } from '@angular/forms'; //work with angular directives *ngModel
import { CommonModule } from '@angular/common';
@Component({
  selector: 'user',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  model: User_Repository = new User_Repository();
  newuser: User = new User();

  get jsonUser() {
    return JSON.stringify(this.newuser);
  }

  adduser(u: User) {
    console.log(`New is ${u}`);
  }

  displaylog(model: any) {
    console.log('New User :', model);
  }
}
