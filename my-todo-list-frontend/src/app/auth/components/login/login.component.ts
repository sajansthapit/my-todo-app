import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { LoginRequestDto } from '../../dto/login.request.dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  login(): void {
    let loginDto: LoginRequestDto = {
      email: this.loginForm.value.email?.toString(),
      password: this.loginForm.value.password?.toString(),
    };
    this.authService.login(loginDto).subscribe({
      next: (res) => {
        this.router.navigate(['dashboard']);
      },
    });
  }
}
