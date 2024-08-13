//repository model file is used to set the all element needed to set up the form app

import { User } from './user.model';
import { Datasource } from './datasource.model';

export class User_Repository {
  private datasource: Datasource;
  private users: User[];

  constructor() {
    this.datasource = new Datasource();
    this.users = new Array<User>();
    this.datasource.getuser().forEach((u) => this.users.push(u));
  }

  getuser(): User[] {
    return this.users;
  }

  getuserID(id: number): any {
    return this.users.find((u) => u.id === id);
  }

  adduser(user: User) {
    this.users.push(user);
  }
}
