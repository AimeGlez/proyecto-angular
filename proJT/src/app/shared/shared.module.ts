import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { RouterModule } from '@angular/router';
import {AvatarModule} from 'primeng/avatar';
import { AppRoutingModule } from '../app.routes';

@NgModule({
  declarations: [],
  imports: [CommonModule, 
  ],
  exports: [
    CommonModule, 
    CardModule,
    ButtonModule,
    PasswordModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    MenubarModule,
    MenuModule,
    RouterModule,
    AvatarModule,
    AppRoutingModule,
    
  ]
})
export class SharedModule { }
