import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { PasswordModule } from 'primeng/password';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user-service/user.service';

@Component({
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule, PasswordModule, RouterOutlet],
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private userService: UserService) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // Método de autenticación
  authentication() {
    console.log("Form Value:", this.loginForm.value);
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      if (username === 'admin' && password === 'admin') {
        this.userService.setAuthenticatedUser(username);
        this.userService.addUser(username); // Agregar el usuario a la lista
        this.router.navigate(['/home']);
      } else {
        console.log("Incorrect credentials");
      }
    } else {
      console.log("Form is invalid");
    }
    this.loginForm.reset();
  }

  cleanForm() {
    this.loginForm.reset();
  }
}