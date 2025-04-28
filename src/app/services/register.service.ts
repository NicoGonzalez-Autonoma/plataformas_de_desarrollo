// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private API_URL = 'http://localhost/backend/plataformas/login/crud.php'; // Ajusta a tu ruta real

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(this.API_URL, {
      email,
      password,
      action: 'login'
    });
  }

  register(email: string, password: string): Observable<any> {
    return this.http.post<any>(this.API_URL, {
      email,
      password,
      action: 'register'
    });
  }
}
