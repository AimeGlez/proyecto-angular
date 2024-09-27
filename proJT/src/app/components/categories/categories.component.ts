import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { link } from 'node:fs';

@Component({
  standalone: true,
  imports: [FormsModule, CommonModule],
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent {
  categories = [
    { number: '/01', name: 'Action Games', arrow: '-->' },
    { number: '/02', name: 'Sports Games', arrow: '-->' },
    { number: '/03', name: 'adventure Games', arrow: '-->' },
    { number: '/04', name: 'Arcade Games', arrow: '-->' },
    { number: '/05', name: 'Fantasy Games', arrow: '-->' },
    { number: '/06', name: 'Strategy Games', arrow: '-->' },
    { number: '/07', name: 'Shooter Games', arrow: '-->' },
    { number: 'VIEW ALL', name: 'All Categories', arrow: '-->'},
  ];
}