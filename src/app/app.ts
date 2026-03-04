import { Component, signal } from '@angular/core';
import { Nav } from "./core/nav/nav";
import { AuthModal } from './user/auth-modal/auth-modal';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Nav, AuthModal],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('clips-ng');
  isToggled = signal(false);
}
