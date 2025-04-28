/* import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, IonButton]
})
export class IndexPage implements OnInit {

  constructor(private router: Router) {}

  irALogin() {
    this.router.navigate(['/login']); // Ajusta la ruta según tu app
  }

  irARegistro() {
    this.router.navigate(['/registro']); // Ajusta la ruta según tu app
  }
  ngOnInit() {
  }

}
 */


import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],

  standalone: true,
  imports: [IonContent, CommonModule, FormsModule]
})
export class IndexPage {
  constructor(private router: Router) {}

  irALogin() {
    this.router.navigate(['/login']);
  }

  irARegistro() {
    this.router.navigate(['/register']);
  }
}




