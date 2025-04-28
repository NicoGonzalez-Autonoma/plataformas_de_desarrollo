import { Component, AfterViewInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { AlertController, LoadingController } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { mailOutline, lockClosedOutline } from 'ionicons/icons';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class RegisterPage implements AfterViewInit {
  name: string = '';
  email: string = '';
  password: string = '';
  isLoading: boolean = true;

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertController: AlertController,
    private loadingController: LoadingController
  ) {




    addIcons({
      'mail-outline': mailOutline,
      'lock-closed-outline': lockClosedOutline
    });
  }

  ngAfterViewInit() {
    const video = document.getElementById('background-video') as HTMLVideoElement;
    console.log('App main.ts iniciado');

    if (video) {
      video.muted = true; // Asegurar que está silenciado
      video.play().catch(error => {
        console.error("Autoplay bloqueado, usuario debe interactuar:", error);
      });
    }
  }

  async ngOnInit() {
    await new Promise(resolve => setTimeout(resolve, 5000));
    this.isLoading = false;

  }

  async register() {
    const loading = await this.loadingController.create({ message: 'Registrando usuario...' });
    await loading.present();
  
    this.authService.register(this.name, this.email, this.password).subscribe({
      next: async (res) => {
        console.log('Respuesta del servidor:', res);
        await loading.dismiss();
  
        if (res.success) {
          localStorage.setItem('email', this.email);
         
          this.router.navigate(['/login']); // Redirige tras registro exitoso
        } else {
          this.showAlert('Registro fallido', res.message || 'No se pudo registrar el usuario.');
        }
      },
      error: async (error) => {
        await loading.dismiss();
        console.error('Error en la solicitud:', error);
        this.showAlert('Error', 'No se pudo conectar con el servidor. Inténtelo más tarde.');
      }
    });
  }
  

  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });
    await alert.present();
  }
}
