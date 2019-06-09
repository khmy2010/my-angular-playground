import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-trace-toggle',
  templateUrl: './trace-toggle.component.html'
})
export class TraceToggleComponent {
  trace: boolean = false;

  @Output() clicked: EventEmitter<boolean> = new EventEmitter<boolean>();

  toggle() {
    this.trace = !this.trace;
    this.clicked.emit(this.trace);
  }

}