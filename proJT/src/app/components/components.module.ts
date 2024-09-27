import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SharedModule } from 'primeng/api';
import { SectionOneComponent } from './section-one/section-one.component';
import { AppComponent } from '../app.component';
import { MenuHeaderComponent } from './menu-header/menu-header.component';
import { CategoriesComponent } from './categories/categories.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,  
  ]
})
export class ComponentsModule { }
