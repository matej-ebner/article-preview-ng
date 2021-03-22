import { Component, EventEmitter, Input, Output } from "@angular/core";
@Component({
  selector: "ap-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"],
})
export class ModalComponent {
  @Output() actionConfirmed = new EventEmitter<boolean>();
  @Input() questionString: string;
  @Input() acceptString: string;
  @Input() declineString: string;

  constructor() {}

  confirmAction() {
    this.actionConfirmed.emit(true);
  }
}
