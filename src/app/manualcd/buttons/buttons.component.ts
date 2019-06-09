import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonsComponent implements OnInit {
  @Output() changed: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {

  }

  emitChangeEvent(number: number) {
    if (isNaN(number)) {
      number = 0;
    }

    this.changed.emit(number);
  }

  get printTrace() {
    console.count('TRACE: buttons.component');
    return '';
  }
}
