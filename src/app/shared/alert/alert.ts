import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-alert',
  imports: [NgClass],
  templateUrl: './alert.html',
  styleUrl: './alert.scss',
})
export class Alert {
  color = input('blue');

  get bgColor() {
    return `bg-${this.color()}-400`;
  }
}
