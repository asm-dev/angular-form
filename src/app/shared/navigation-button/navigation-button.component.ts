import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navigation-button',
  standalone: false,
  templateUrl: './navigation-button.component.html',
  styleUrl: './navigation-button.component.scss',
})
export class NavigationButtonComponent {
  @Input() text: string = 'Navegar';
  @Input() routerLink: string = '';
}
