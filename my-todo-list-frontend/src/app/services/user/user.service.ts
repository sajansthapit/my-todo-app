import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDto } from './dto/user.dto';
import { Observable } from 'rxjs';
import { BaseResponse } from '../base.response';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  API_URL: string = 'http://localhost:8090';

  constructor(private http: HttpClient) {}

  public register(userDto: UserDto): Observable<BaseResponse> {
    return this.http.post(this.API_URL.concat('/register'), userDto);
  }
}
