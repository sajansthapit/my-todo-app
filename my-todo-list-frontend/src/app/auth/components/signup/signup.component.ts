import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PasswordStrengthComponent } from '../../../shared/password-strength/password-strength.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, PasswordStrengthComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignupComponent implements OnInit {
  validPassword: boolean = false;
  isPasswordMatched: boolean = false;
  visible: boolean = false;

  signupForm = new FormGroup({
    fullName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    reTypePassword: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
    this.signupForm.get('password')?.valueChanges.subscribe((password) => {
      this.isPasswordMatched = password == this.signupForm.value.reTypePassword;
    });

    this.signupForm
      .get('reTypePassword')
      ?.valueChanges.subscribe((reTypePassword) => {
        this.isPasswordMatched =
          reTypePassword == this.signupForm.value.password;
      });
  }

  signup(): void {
    if (!this.signupForm.valid) this.signupForm.markAllAsTouched();

    if (this.signupForm.valid && this.validPassword && this.isPasswordMatched) {
      console.log(this.signupForm.value);
    }
  }

  isPasswordValid(event: boolean): void {
    this.validPassword = event;
  }
}
