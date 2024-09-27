import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MenuHeaderComponent } from './components/menu-header/menu-header.component';
import { SectionOneComponent } from './components/section-one/section-one.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MenuHeaderComponent, SectionOneComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private router: Router) {}

  handleMenuSelection(menuItem: string) {
    if (menuItem === 'login') {
      this.router.navigate(['/login']);
    }
    
  }
}
