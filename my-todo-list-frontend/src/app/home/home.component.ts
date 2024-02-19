import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LoginComponent } from '../auth/components/login/login.component';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { AuthContainerComponent } from '../auth/components/auth-container/auth-container.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AuthContainerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authService.checkLogin();
    if (this.isLoggedIn) {
      this.router.navigate(['dashboard']);
    }
  }
}
