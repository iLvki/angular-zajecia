import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UserInterface } from '../interface/user.interface';
import { RoleEnum } from '../enum/role.enum';

@Component({
  selector: 'app-u1',
  imports: [CommonModule],
  templateUrl: './u1.component.html',
  styleUrl: './u1.component.css',
})
export class U1Component {
  users: UserInterface[] = [
    {
      name: 'Jacek',
      surname: 'Mąciwór',
      role: RoleEnum.admin,
      email: 'jmaciwor@gmail.com',
    },
    {
      name: 'Ania',
      surname: 'Wilczydół',
      role: RoleEnum.user,
      email: 'a.wilczydol@a.b',
    },
    {
      name: 'Marek',
      surname: 'Krzywy',
      role: RoleEnum.user,
      email: 'mkrzywy@pol.pl',
    },
  ];
}
