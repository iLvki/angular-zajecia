import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { U1Component } from './u1/u1.component';

@Component({
  selector: 'app-root',
  imports: [U1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'users';
}
