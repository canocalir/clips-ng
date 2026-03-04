import { Component, inject, input, viewChild, AfterViewInit, ElementRef } from '@angular/core';
import { ModalService } from '../../services/modal';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.html',
  styleUrl: './modal.scss',
})
export class Modal implements AfterViewInit {
  modal = inject(ModalService);

  id = input.required<string>();
  dialog = viewChild.required<ElementRef<HTMLDialogElement>>('baseDialog');


  closeModal(event: Event) {
    event.preventDefault();
    this.modal.toggle(this.id());
  }

  ngAfterViewInit() {
    this.modal.register(this.id(), this.dialog().nativeElement);
  }

  ngOnDestroy() {
    this.modal.unregister(this.id());
  }
}
