import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { PostModel } from 'src/app/model/post.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit, OnDestroy {
  @Input() data: PostModel;
  @Input() traceEvent: boolean = false;

  @Output() remove: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.traceEvent) {
      console.log('%c TRACE: A Card-Component just got destroyed.', 'background: blue; color: white; display: block;');
    }
  }

  emitRemove(id: number) {
    this.remove.emit(id);
  }

  get trace() {
    if (this.traceEvent) {
      console.count('TRACE: Card Component');
    }
    return '';
  }

}
