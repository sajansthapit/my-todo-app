import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequestDto } from './dto/login.request.dto';
import { LoginResponseDto } from './dto/login.response.dto';
import { Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  API_URL: string = 'http://localhost:8090';

  constructor(private http: HttpClient) {}

  public login(loginDto: LoginRequestDto): Observable<any> {
    return new Observable((subscriber) => {
      this.http.post(this.API_URL.concat('/login'), loginDto).subscribe({
        next: (res) => {
          this.setSession(res);
          subscriber.next(res);
        },
        error: (err) => {
          subscriber.next(err);
        },
      });
    });
  }

  private setSession(authResult: LoginResponseDto): void {
    localStorage.setItem('access_token', authResult.accessToken as string);
  }

  public logout(): void {
    localStorage.removeItem('access_token');
  }

  public checkLogin(): boolean {
    const token = localStorage.getItem('access_token');
    if (!token) return false;
    const expiry = JSON.parse(atob(token?.split('.')[1] as string)).exp;
    return Math.floor(new Date().getTime() / 1000) < expiry;
  }
}
