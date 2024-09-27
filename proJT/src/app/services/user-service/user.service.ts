import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: Array<{ id: number; name: string }> = [
    { id: 1, name: 'Dr Team' },
    { id: 2, name: 'Mia Plays' },
    { id: 3, name: 'Keoxer' },
    { id: 4, name: 'Nickmerc' }
  ];

  private currentUserSubject = new BehaviorSubject<string | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();
  liveStreamText: string = 'Join Live Stream';
 
  constructor() {}

  setAuthenticatedUser(userName: string) {
    console.log('Setting authenticated user:', userName);
    this.currentUserSubject.next(userName);
  }

  getAuthenticatedUser(): string | null {
    return this.currentUserSubject.getValue();
  }

  getUsers(): Array<{ id: number; name: string }> {
    return this.users;
  }

 addUser(userName: string) {
    if (this.users.some(user => user.name === userName)) {
      return;
    }
    const newId = this.users.length > 0 ? Math.max(...this.users.map(u => u.id)) + 1 : 1;
    this.users.push({ id: newId, name: userName });
  }

  updateLiveStreamText(userName: string) {
    this.liveStreamText = `${userName}`;
  }
}