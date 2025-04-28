import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import * as L from 'leaflet';
import { personCircleOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
// Importar íconos de Leaflet para evitar íconos rotos
import 'leaflet/dist/images/marker-icon.png';
import 'leaflet/dist/images/marker-icon-2x.png';
import 'leaflet/dist/images/marker-shadow.png';

import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenu,
  IonMenuButton,
  IonTitle,
  IonToolbar,
  IonFooter,
  IonCard,
  IonCardContent,
  IonButton
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonContent, IonTitle, IonButton, IonCard, IonCardContent, IonFooter, IonMenu, IonMenuButton, IonButtons],
  providers: [AuthService],
})
export class HomePage implements OnInit {
  map!: L.Map;
  
  constructor(private authService: AuthService, private router: Router) {
    addIcons({
      'person-circle-outline': personCircleOutline,
      // Agrega aquí otros iconos que necesites
    });
  }

  ngOnInit() {}

  ionViewDidEnter() {
    // 🔧 Configurar ruta personalizada para íconos
    delete (L.Icon.Default.prototype as any)._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'assets/marker-icon-2x.png',
      iconUrl: 'assets/marker-icon.png',
      shadowUrl: 'assets/marker-shadow.png',
    });


    /* Este es la ubicación en el mapa al iniciar */
    this.map = L.map('map').setView([55.5607931,35.0194686,8], 6);
    /* Este es el estilo del mapa */
    L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.jpg', { 
      attribution:
        '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      
    }).addTo(this.map);

    /* Estos son los puntos de ubicación */
    const markPoint = L.marker([5.0692096, -75.513856, 601]);
    const markPoint2 = L.marker([19.3910844,-99.4732882,10]);
    const markPoint3 = L.marker([10.6338392,-71.8417603,11]);
    const markPoint4 = L.marker([-0.1858972,-79.0215714,10]);


    markPoint.bindPopup('<p>WIN THE TREASURE</p>');
    this.map.addLayer(markPoint);

    markPoint2.bindPopup('<p>NO</p>');
    this.map.addLayer(markPoint2);

    markPoint3.bindPopup('<p>NO</p>');
    this.map.addLayer(markPoint3);
  
    markPoint4.bindPopup('<p>NO</p>');
    this.map.addLayer(markPoint4);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
