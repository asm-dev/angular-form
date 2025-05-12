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
  showExtraColumns = false;
  headerStyleChanged = false;

  constructor() {
    this.users = this.createBaseUserList();
  }

  toggleHeaderStyle(): void {
    this.showExtraColumns = !this.showExtraColumns;
    this.headerStyleChanged = !this.headerStyleChanged;
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
