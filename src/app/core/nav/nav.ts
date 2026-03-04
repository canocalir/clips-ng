import { Component, inject } from '@angular/core';
import { ModalService } from '../../services/modal';

@Component({
  selector: 'app-nav',
  imports: [],
  templateUrl: './nav.html',
  styleUrl: './nav.scss',
})
export class Nav {
  modal = inject(ModalService);

  openModal(event: Event) {
    event.preventDefault();
    this.modal.toggle('auth');
  }
}
