import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-u1',
  imports: [CommonModule],
  templateUrl: './u1.component.html',
  styleUrl: './u1.component.css',
})
export class U1Component {
  users = [
    {
      name: 'Jacek',
      surname: 'Mąciwór',
      role: 'Admin',
      email: 'jmaciwor@gmail.com',
    },
    {
      name: 'Ania',
      surname: 'Wilczydół',
      role: 'Ksiegowa',
      email: 'a.wilczydol@a.b',
    },
    {
      name: 'Marek',
      surname: 'Krzywy',
      role: 'IT Manager',
      email: 'mkrzywy@pol.pl',
    },
  ];
}
