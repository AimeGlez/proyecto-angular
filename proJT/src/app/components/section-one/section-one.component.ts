import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserService } from '../../services/user-service/user.service';
import { UserListComponent } from '../user-list/user-list.component';
import { ImageComponent } from '../imagen/imagen.component';

@Component({
  selector: 'app-section-one',
  standalone: true,
  imports: [RouterLink, RouterOutlet, UserListComponent, ImageComponent],
  templateUrl: './section-one.component.html',
  styleUrls: ['./section-one.component.css']
})
export class SectionOneComponent implements OnInit {
  liveStreamText: string = 'Join Live Stream';
  userName: string = ''; 

  constructor(private userService: UserService) {}
  
  @Output() loginRequested = new EventEmitter<void>();
  @Output() filterRequested = new EventEmitter<void>();

  ngOnInit() {
    this.userService.currentUser$.subscribe({
      next: (name: string | null) => {
        this.userName = name || ''; 
      },
      error: (err) => console.error('Error in userService subscription:', err) 
    });
    
  }

  onLoginClick() {
    const userName = 'UserName'; 
    this.userService.setAuthenticatedUser(userName);
    this.loginRequested.emit(); 
  }

  onSearchClick() {
    this.filterRequested.emit();
  }

  updateLiveStreamText(userName: string) {
    this.liveStreamText = `${userName}`;
  }

}
