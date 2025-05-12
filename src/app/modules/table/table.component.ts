import { Component } from '@angular/core';
import { UserModel } from '../../models/user.model';

@Component({
  selector: 'app-table',
  standalone: false,
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  users: UserModel[] = [];

  constructor() {
    this.users = this.createBaseUserList();
  }

  private createBaseUserList(): UserModel[] {
    const userList: UserModel[] = [];

    for (let i = 1; i <= 15; i++) {
      userList.push({
        id: i,
        name: `Usuario ${i}`,
        email: `usuario${i}@correo.com`,
        age: 20 + i,
        city: `Ciudad ${i}`,
        active: i % 2 === 0,
        phone: `60012345${i}`,
      });
    }

    return userList;
  }
}
