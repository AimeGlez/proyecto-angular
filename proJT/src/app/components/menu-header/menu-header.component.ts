import { Component, Output, EventEmitter } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-menu-header',
  standalone: true,
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.css'],
  imports: [RouterOutlet, RouterLink]
})
export class MenuHeaderComponent {
  @Output() loginRequested = new EventEmitter<void>();

  onLoginClick() {
    this.loginRequested.emit(); // Emitir evento cuando se haga clic en "Sign in"
  }
}