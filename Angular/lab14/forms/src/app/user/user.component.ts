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
  parseJson: any;
  parseJsonName: any;
  parseJsonEmail: any;
  usercounter: number = this.model.getuser().length;

  get jsonUser() {
    return JSON.stringify(this.newuser);
  }

  adduser(u: User) {
    console.log(`New user is ` + this.jsonUser);
    this.usercounter += 1;
    this.model.adduser(
      new User(this.usercounter, this.parseJsonName, this.parseJsonEmail)
    );
  }

  displaylog(model: any) {
    console.log('New User :', model);
  }

  //form validation to set validation rules

  formsubmit: boolean = false;

  //submit form() method to handle the form data to submission

  submitForm(form: any) {
    this.formsubmit = true;
    if (form.valid) {
      this.parseJson = JSON.parse(JSON.stringify(this.newuser));
      this.parseJsonName = this.parseJson.name;
      this.parseJsonEmail = this.parseJson.email;
      this.adduser(this.newuser);
      this.adduser(this.newuser);
      this.newuser = new User();
      form.reset();
      this.formsubmit = false;
    }
  }
}
