import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';


@Injectable({
  providedIn: 'root',
  
})

export class AuthService {
  private apiUrl = 'http://localhost/backend/plataformas/login/crud.php';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { 
      email, 
      password,
      action: 'login'  // Añadir esta línea
    }).pipe(
      tap((response) => {
        if (response.success && response.token) {
          localStorage.setItem('token', response.token);
        }
      })
    );
  }

  logout() {
    localStorage.removeItem('token'); // Eliminar el token
    localStorage.removeItem('email'); // Eliminar el email guardado (opcional)
  }
  

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token'); // Retorna true si hay sesión activa
  }


  register(name: string, email: string, password: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, {
      name,
      email,
      password,
      action: 'register'
    });
  }
}
