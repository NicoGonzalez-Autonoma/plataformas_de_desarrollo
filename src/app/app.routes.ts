import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },

  { 
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then(m => m.LoginPage),
    canActivate: [LoginGuard] // Evita que un usuario autenticado entre a login
  },

  { 
    path: 'home',
    loadComponent: () => import('./home/home.page').then(m => m.HomePage),
    canActivate: [AuthGuard] // Protege Home para usuarios autenticados
  },

  { 
    path: 'update',
    loadComponent: () => import('./pages/update/update.page').then(m => m.UpdatePage),
    canActivate: [AuthGuard] // Protegido
  },

  { 
    path: 'profile',
    loadComponent: () => import('./pages/profile/profile.page').then(m => m.ProfilePage),
    canActivate: [AuthGuard] // Protegido
  },

  { 
    path: 'register',
    loadComponent: () => import('./pages/register/register.page').then(m => m.RegisterPage),
  },

  {
    path: 'index',
    loadComponent: () => import('./pages/index/index.page').then( m => m.IndexPage)
  }
];
