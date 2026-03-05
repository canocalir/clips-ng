import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Input } from '../../shared/input/input';
import { Alert } from "../../shared/alert/alert";

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, Input, Alert],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  fb = inject(FormBuilder);


  form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)]],
    confirm_password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)]],
    age: [18, [Validators.required, Validators.min(18), Validators.max(120)]],
    phoneNumber: ['', [Validators.required, Validators.minLength(13), Validators.maxLength(13)]],
  });

  showAlert = signal(false);
  alertMessage = signal('Please wait! Your account is being created.');
  alertColor = signal('blue');

  register() {
   this.showAlert.set(true);
   this.alertMessage.set('Registration successful!');
   this.alertColor.set('blue');
  }
}
