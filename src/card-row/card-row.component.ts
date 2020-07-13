import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Card } from '../card/card.service';

@Component({
  selector: 'app-card-row',
  templateUrl: './card-row.component.html',
  styleUrls: ['./card-row.component.css']
})
export class CardRowComponent implements OnInit {
  @Input() card : Card;
  @Output() cardChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  increment() {
    this.card.count = this.card.count + 1;
    this.cardChange.emit(this.card)
  }

  decrement() {
    if (this.card.count > 0) {
      this.card.count = this.card.count - 1;
      this.cardChange.emit(this.card)
    }
  }

}