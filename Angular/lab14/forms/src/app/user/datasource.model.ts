// this file is used to save each users information in an array
import { User } from './user.model';

export class Datasource {
  private users: User[];

  //construct an array with different users
  constructor() {
    this.users = new Array<User>(
      new User(1, 'muyin', 'muyin@qq.com'),
      new User(2, 'muyin4', 'muyin4@q2.com')
    );
  }
  getuser(): User[] {
    return this.users;
  }
}
