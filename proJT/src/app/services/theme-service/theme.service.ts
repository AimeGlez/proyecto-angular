import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private themeKey = 'theme';
  private currentThemeSubject = new BehaviorSubject<string>(this.getCurrentTheme());
  currentTheme$ = this.currentThemeSubject.asObservable();

  constructor() {
    const savedTheme = localStorage.getItem(this.themeKey) || 'light-theme';
    document.body.classList.add(savedTheme);
    this.currentThemeSubject.next(savedTheme); // Emitir el tema actual
  }

  toggleTheme() {
    const currentTheme = this.getCurrentTheme();
    const newTheme = currentTheme === 'light-theme' ? 'dark-theme' : 'light-theme';

    document.body.classList.remove(currentTheme);
    document.body.classList.add(newTheme);

    localStorage.setItem(this.themeKey, newTheme);
    this.currentThemeSubject.next(newTheme); // Emitir el nuevo tema
  }

  getCurrentTheme(): string {
    return document.body.classList.contains('dark-theme') ? 'dark-theme' : 'light-theme';
  }
}