import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordStrengthComponent } from '../shared/password-strength/password-strength.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ButtonModule, InputTextModule, ReactiveFormsModule, PasswordStrengthComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignupComponent {

  validPassword: boolean = false;

  signupForm = new FormGroup({
    fullName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    reTypePassword: new FormControl('')
  });

  signup():void {

  }

  isPasswordValid(event: boolean): void {
    this.validPassword = event;
  }
}
