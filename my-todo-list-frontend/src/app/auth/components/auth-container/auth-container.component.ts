import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth-container',
  standalone: true,
  imports: [CommonModule, FormsModule, LoginComponent, SignupComponent],
  templateUrl: './auth-container.component.html',
  styleUrl: './auth-container.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthContainerComponent {
  toggle: boolean = false;
}
