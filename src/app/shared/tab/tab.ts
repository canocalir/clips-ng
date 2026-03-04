import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-tab',
  imports: [],
  templateUrl: './tab.html',
  styleUrl: './tab.scss',
})
export class Tab {
  tabTitle = input.required<string>();
  isActive = signal(false);
}
