import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginDto } from './dto/LoginDto';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  API_URL: string = 'http://localhost:8090';

  constructor(private http: HttpClient) {}

  login(loginDto: LoginDto): Observable<any> {
    return this.http.post(this.API_URL.concat('/login'), loginDto);
  }
}
