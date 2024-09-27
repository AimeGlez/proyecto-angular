import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user-service/user.service';
import { ThemeService } from '../../services/theme-service/theme.service';
@Component({
  standalone: true,
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  imports: [FormsModule, CommonModule],
})
export class UserListComponent {
  @Input() authenticatedUserName: string | null = null; 
  @Output() userAdded = new EventEmitter<string>(); // Emite el nombre del usuario agregado
  users: Array<{ id: number; name: string }> = [];
  searchQuery: string = '';
  showSearch: boolean = false;
  filteredUsers: Array<{ id: number; name: string }> = [];
  addedUsers: Array<{ id: number; name: string }> = [];

  constructor(private userService: UserService, private themeService: ThemeService) {}
  isDarkTheme = false;
  
  ngOnInit() {
    this.users = this.userService.getUsers();
    this.filteredUsers = [...this.users];
  }

  toggleSearch() {
    this.showSearch = !this.showSearch;
    if (!this.showSearch) {
      this.searchQuery = '';
      this.filteredUsers = [...this.users];
    }
  }

  onSearchInput() {
    this.filteredUsers = this.users.filter(user =>
      user.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  searchGames() {
    if (this.searchQuery.trim() === '') {
      this.filteredUsers = [...this.users];
    } else {
      this.filteredUsers = this.users.filter(user =>
        user.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  }

  addUser(user: { id: number; name: string }) {
    if (this.userAdded) {
      this.userService.updateLiveStreamText(user.name); // Actualiza el texto solo cuando se agrega un usuario
      this.userAdded.emit(user.name); // Emitir el nombre del usuario agregado
    }
  }

  toggleTheme() {
    this.themeService.toggleTheme();

    
    this.isDarkTheme =! this.isDarkTheme;
    document.body.classList.toggle('dark-theme', this.isDarkTheme);
  }


}
