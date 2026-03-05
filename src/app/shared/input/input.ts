import { Component, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-input',
  imports: [ReactiveFormsModule, NgxMaskDirective,],
  templateUrl: './input.html',
  styleUrl: './input.scss',
  providers: [provideNgxMask()],
})
export class Input {
  control = input.required<FormControl>();
  type = input('text');
  placeholder = input('');
  format = input('');
}
