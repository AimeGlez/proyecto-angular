import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject = new BehaviorSubject<string | null>(null);
  user$ = this.userSubject.asObservable();

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === 'admin') {
      this.userSubject.next(username);
      return true;
    }
    return false;
  }

  logout() {
    this.userSubject.next(null);
  }
}