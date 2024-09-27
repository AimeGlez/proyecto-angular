import { Component } from '@angular/core';
import { MenuHeaderComponent } from '../components/menu-header/menu-header.component';
import { SectionOneComponent } from '../components/section-one/section-one.component';
import { CategoriesComponent } from '../components/categories/categories.component';
import { LoginComponent } from '../components/login/login.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { UserListComponent } from '../components/user-list/user-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports:[
    MenuHeaderComponent, 
    SectionOneComponent, 
    CategoriesComponent, 
    LoginComponent, 
    UserListComponent,
    CategoriesComponent,
    CommonModule, 
    ButtonModule, 
  ]
})
export class HomeComponent {
  constructor(private router: Router) {}

  showLogin = false;

  onLoginRequested() {
    this.showLogin = true;
  }

  onLoginClosed() {
    this.showLogin = false;
  }

  showFilter = false;

  onFilterRequested() {
    this.showLogin = true;
  }

  onFilterClosed() {
    this.showLogin = false;
  }

  
}