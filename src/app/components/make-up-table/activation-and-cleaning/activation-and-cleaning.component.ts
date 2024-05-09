import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-activation-and-cleaning',
  templateUrl: './activation-and-cleaning.component.html',
  styleUrls: ['./activation-and-cleaning.component.css'],
})
export class ActivationAndCleaningComponent {
  @Output() users: EventEmitter<boolean> = new EventEmitter<boolean>();

  public activateRequest(activator: boolean): void {
    this.users.emit(activator);
  }
}
