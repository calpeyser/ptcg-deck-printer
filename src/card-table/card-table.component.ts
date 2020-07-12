import { Component, OnInit, Input } from '@angular/core';

import { Card } from '../card/card.service';

@Component({
  selector: 'app-card-table',
  templateUrl: './card-table.component.html',
  styleUrls: ['./card-table.component.css']
})
export class CardTableComponent implements OnInit {
  @Input() cards : Card[]

  constructor() { }

  ngOnInit() {
  }

}