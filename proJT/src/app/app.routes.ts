import { NgModule } from '@angular/core';
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from 'primeng/api';
import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { CategoriesComponent } from './components/categories/categories.component';


export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'categories', component: CategoriesComponent },
    { path: 'user', component: UserListComponent },
    { path: '**', redirectTo: '/home' }      
];

@NgModule({
    imports: [RouterModule.forRoot(routes), SharedModule, AppComponent],
    exports: [RouterModule, RouterLink]
  })
  export class AppRoutingModule { }
