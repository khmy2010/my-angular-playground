import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-trigger-btn',
  templateUrl: './trigger-btn.component.html',
  styleUrls: ['./trigger-btn.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TriggerBtnComponent implements OnInit {
  @Output() clicked: EventEmitter<null> = new EventEmitter<null>();

  constructor() { }

  ngOnInit() {
  }

  emit() {
    this.clicked.emit();
  }

}
