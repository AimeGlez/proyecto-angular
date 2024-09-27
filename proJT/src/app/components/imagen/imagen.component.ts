import { Component, OnInit, OnDestroy } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';  // Asegúrate de incluir CommonModule para standalone
import { ThemeService } from '../../services/theme-service/theme.service';

@Component({
  selector: 'app-imagen',
  standalone: true,
  imports: [CommonModule],  // Importa módulos comunes necesarios para standalone
  templateUrl: './imagen.component.html',
  styleUrls: ['./imagen.component.css']
})

export class ImageComponent implements OnInit, OnDestroy {
  imageSrc: string = '/assets/images/imag-ligth--t.jpg';  // Inicializa la imagen
  private LIGHT_THEME_IMAGE = '/assets/images/imag-ligth-one.jpg';
  private DARK_THEME_IMAGE = '/assets/images/imag-copy.jpg';
  private themeSubscription: Subscription | null = null; 
  constructor(
    private themeService: ThemeService, 
    private route: ActivatedRoute        // Para escuchar parámetros de la ruta
  ) {}

  ngOnInit() {
    this.updateImage();

    // Escucha los cambios de parámetros de la ruta
    this.route.queryParams.subscribe(() => {
      this.updateImage(); // Si los parámetros cambian, actualiza la imagen
    });

    // Escucha los cambios de tema usando el observable currentTheme$
    this.themeSubscription = this.themeService.currentTheme$.subscribe(() => {
      this.updateImage(); // Si el tema cambia, actualiza la imagen
    });
  }

  updateImage() {
    try {
      const currentTheme = this.themeService.getCurrentTheme();  // Obtén el tema actual
      this.imageSrc = currentTheme === 'dark-theme' 
        ?  this.LIGHT_THEME_IMAGE 
        :this.DARK_THEME_IMAGE;
    } catch (error) {
      console.error('Error al actualizar la imagen:', error);  
    }
  }

  ngOnDestroy() {
    if (this.themeSubscription) {
      this.themeSubscription.unsubscribe();
    }
  }
}